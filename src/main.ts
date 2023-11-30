import * as core from '@actions/core'
import {download} from './downloader'
import {getVersion} from './version'
import {install} from './installer'
import {updatePath} from './update-path'

async function run(): Promise<void> {
    try {
        const rocm: string = core.getInput('rocm')
        core.debug(`Desired cuda version: ${rocm}`)
        const methodString: string = core.getInput('method')
        core.debug(`Desired method: ${methodString}`)
        const useGitHubCache: boolean = core.getBooleanInput('use-github-cache')
        core.debug(`Desired GitHub cache usage: ${useGitHubCache}`)
        // Parse version string
        const version = await getVersion(rocm, "local")
        const executablePath: string = await download(
            version,
            "local",
            useGitHubCache
        )

        // Install
        await install(
            executablePath,
            version,
            [],
            []
        )


        // Add CUDA environment variables to GitHub environment variables
        const cudaPath: string = await updatePath(version)

        // Set output variables
        core.setOutput('rocm', rocm)
        core.setOutput('ROCM_PATH', cudaPath)
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error)
        } else {
            core.setFailed('Unknown error')
        }
    }
}

run()

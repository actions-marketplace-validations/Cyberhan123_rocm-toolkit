# rocm-toolkit

This action installs the [AMD ROCm™](https://rocm.docs.amd.com/en/latest) on the system.
It adds the rocm install location as `ROCM_PATH` to `GITHUB_ENV` so you can access the rocm install location in subsequent steps. `ROCM_PATH/bin` is added to `GITHUB_PATH` so you can use commands such as `clang` directly in subsequent steps. Right now only `windows-latest` is supported. 
## Inputs

### `rocm`

Default: `'5.5.0'`.

## Example usage

```yaml
steps:
- uses: Cyberhan123/rocm-toolkit@v0.1.0
  id: rocm-toolkit
  with:
    rocm: '5.5.0'
```

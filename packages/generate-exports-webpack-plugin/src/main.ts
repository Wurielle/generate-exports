import { generateExports } from '@wurielle/generate-exports'

export class GenerateExportsWebpackPlugin {
  instance: ReturnType<typeof generateExports>

  constructor(...args: Parameters<typeof generateExports>) {
    this.instance = generateExports(...args)
  }

  apply() {
    this.instance.start()
  }
}



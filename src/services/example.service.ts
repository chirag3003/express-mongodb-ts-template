import { IExampleService } from '@/interfaces/example.interface'
import { Example } from '@/models/example.model'

export class ExampleService implements IExampleService {
  async getExamples() {
    const data = await Example.find({})
    return data
  }

  async postExamples() {}
}

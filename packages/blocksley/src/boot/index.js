import boot_tippy from './tippy'
import boot_resizable from './resizable'

export default async (app, options={}) => {
    await boot_tippy(app, options)
    await boot_resizable(app, options)
}
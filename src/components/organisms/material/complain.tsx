export default function Complain() {
    return (
        <div className="flex items-center justify-center">
            <div className="border rounded p-5 flex flex-col gap-5 text-sm text-neutral-80 items-center">
                <table className="table">
                    <tr>
                        <td className="table-cell">
                            <h3 className="text-text-heading">Form Komplain</h3>
                        </td>
                        <td>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row gap-1">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Lancar"
                                    />
                                    <label htmlFor="">Lancar</label>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Masalah"
                                    />
                                    <label htmlFor="">Masalah</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-20 py-7">
                            <span>Pilih Jenis Permasalahan</span>
                        </td>
                        <td>
                            <select className="border border-neutral-40 rounded-lg p-2 w-full">
                                <option value="0">Pilih Masalah</option>
                                <option value="0">Pilih Masalah</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Silahkan Pilih Action</span>
                        </td>
                        <td>
                            <select className="border border-neutral-40 rounded-lg p-2 w-full">
                                <option value="0">Pilih Action</option>
                                <option value="0">Pilih Action</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <button className="bg-primary-main rounded-lg px-5 py-2 text-white">Submit</button>
            </div>
        </div>
    )
}

import Welcome from '../components/macro/Welcome'
import Holiday from '../components/macro/Holiday'
import Clockinout from '../components/macro/Clockinout'

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome Card */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
                <Welcome />
                <Holiday />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-20">
                <Clockinout />

                <div className="bg-white shadow-lg rounded-xl p-6 col-span-3 lg:col-span-1 text-center dark:bg-surface-900">
                    <h2 className="text-xl font-bold dark:text-white">Heading</h2>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <button className="mt-6 w-full py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                        View
                    </button>
                </div>
            </div>
        </div >
    )
}

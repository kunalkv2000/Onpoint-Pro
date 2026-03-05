import Badge from '../micro/Badge'

export default function Holiday() {

    const image = 'https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.jpg?s=612x612&w=0&k=20&c=c0kcjHpSFJXg7F4D6s8Ez-7RWY3MjoIrwsiRQKScank=';

    return (
        <div className="relative col-span-3 xl:col-span-1 lg:col-span-2 rounded-xl overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative px-8 py-12">

                <div className="flex items-center justify-between mb-4">
                    <p className="text-md text-white leading-relaxed">Holidays</p>

                    <p className="text-md text-white leading-relaxed cursor-pointer">View All &rarr;</p>
                </div>

                <h2 className="text-3xl text-white font-bold mt-2"> Holi </h2>

                <p className="text-md text-white leading-relaxed mt-2">
                    04 March 2026
                </p>

                <Badge color="floater">Floater Leaver</Badge>
            </div>
        </div>
    )
}

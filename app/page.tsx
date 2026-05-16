import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menus = [
  {
    name: "広島風お好み焼き",
    price: "980円",
    category: "主菜",
    description: "キャベツたっぷり本格派",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/20230311%E5%BA%83%E5%B3%B6%E9%A2%A8%E3%81%8A%E5%A5%BD%E3%81%BF%E7%84%BC%E3%81%8D%E3%83%9E%E3%83%A8%E3%83%8D%E3%83%BC%E3%82%BA%E7%84%A1%E3%81%97.jpg",
  },
  {
    name: "背徳バターポテト",
    price: "520円",
    category: "サイド",
    description: "バターじゅわっ",
    image:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "深夜の唐揚げ定食",
    price: "880円",
    category: "主菜",
    description: "夜ほど美味い",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "限界ねぎ塩ラーメン",
    price: "790円",
    category: "主菜",
    description: "ねぎ山盛り",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "無限枝豆",
    price: "390円",
    category: "サイド",
    description: "つい手が止まらない",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wok-fried%20edamame%20by%20joyosity.jpg",
  },
  {
    name: "青春のソーダ",
    price: "450円",
    category: "ドリンク",
    description: "しゅわしゅわ青春味",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-6">
      <div className="mx-auto max-w-sm space-y-5">

        <header className="rounded-3xl bg-gradient-to-r from-orange-100 to-red-100 p-6 shadow-md">
          <p className="text-sm text-orange-700">
            スマホ注文システム
          </p>

          <h1 className="mt-1 text-4xl font-bold text-red-900">
            おおさき亭
          </h1>

          <p className="mt-2 text-sm text-neutral-700">
            席からスマホで簡単に注文できます。
          </p>
        </header>

        <section className="space-y-3">

          <div>
            <h2 className="text-2xl font-bold text-neutral-800">
              メニュー
            </h2>

            <p className="text-sm text-neutral-500">
              お好きな料理を追加してください。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">

            {menus.map((menu) => (
              <Card
                key={menu.name}
                className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg"
              >
                <CardContent className="p-0">

                  <div className="h-32 w-full overflow-hidden bg-orange-100">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 p-3">

                    <div>
                      <p className="line-clamp-2 text-sm font-bold text-neutral-900">
                        {menu.name}
                      </p>

                      <p className="text-xs text-orange-600">
                        {menu.category}
                      </p>

                      <p className="mt-1 text-lg font-bold text-red-700">
                        {menu.price}
                      </p>
                    </div>

                    <Button className="h-9 w-full rounded-xl bg-red-600 text-sm text-white hover:bg-red-700">
                      追加
                    </Button>

                  </div>

                </CardContent>
              </Card>
            ))}

          </div>

        </section>

        <section className="space-y-3">

          <h2 className="text-2xl font-bold text-neutral-800">
            注文
          </h2>

          <Card className="rounded-3xl border-0 bg-white shadow-md">
            <CardContent className="space-y-4 p-5">

              <div>
                <p className="font-semibold text-neutral-800">
                  現在の注文
                </p>

                <p className="text-sm text-neutral-500">
                  まだ商品は追加されていません。
                </p>
              </div>

              <Button className="h-11 w-full rounded-xl bg-neutral-900">
                注文リストを見る
              </Button>

            </CardContent>
          </Card>

        </section>

        <footer className="pt-2">

          <Button className="h-14 w-full rounded-2xl bg-orange-500 text-lg font-bold hover:bg-orange-600">
            注文を確認する
          </Button>

        </footer>

      </div>
    </main>
  )
}import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuSections = [
  {
    title: "主食",
    menus: [
      {
        name: "広島風お好み焼き",
        price: "980円",
        category: "主食",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/20230311%E5%BA%83%E5%B3%B6%E9%A2%A8%E3%81%8A%E5%A5%BD%E3%81%BF%E7%84%BC%E3%81%8D%E3%83%9E%E3%83%A8%E3%83%8D%E3%83%BC%E3%82%BA%E7%84%A1%E3%81%97.jpg",
      },
      {
        name: "限界ねぎ塩ラーメン",
        price: "790円",
        category: "主食",
        image:
          "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "TKM 卵かけ麺",
        price: "690円",
        category: "主食",
        image:
          "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "定食",
    menus: [
      {
        name: "深夜の唐揚げ定食",
        price: "880円",
        category: "定食",
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "ジンギスカン定食",
        price: "1180円",
        category: "定食",
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "サイド",
    menus: [
      {
        name: "背徳バターポテト",
        price: "520円",
        category: "サイド",
        image:
          "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "無限枝豆",
        price: "390円",
        category: "サイド",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Wok-fried%20edamame%20by%20joyosity.jpg",
      },
      {
        name: "ごつ盛りサラダ",
        price: "620円",
        category: "サイド",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "ドリンク",
    menus: [
      {
        name: "青春のソーダ",
        price: "450円",
        category: "ドリンク",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "ジンジャーエール",
        price: "350円",
        category: "ドリンク",
        image:
          "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "ガラナ",
        price: "380円",
        category: "ドリンク",
        image:
          "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 pb-28">
      <div className="mx-auto max-w-sm">
        <header className="sticky top-0 z-20 border-b bg-orange-50/95 px-4 py-4 backdrop-blur">
          <div className="rounded-3xl bg-gradient-to-r from-orange-100 to-red-100 p-5 shadow-md">
            <p className="text-sm text-orange-700">スマホ注文システム</p>
            <h1 className="mt-1 text-4xl font-bold text-red-900">
              おおさき亭
            </h1>
            <p className="mt-2 text-sm text-neutral-700">
              席からスマホで簡単に注文できます。
            </p>
          </div>
        </header>

        <div className="space-y-6 px-4 py-5">
          <section>
            <h2 className="text-2xl font-bold text-neutral-800">
              メニュー
            </h2>
            <p className="text-sm text-neutral-500">
              お好きな料理を注文リストに追加してください。
            </p>
          </section>

          {menuSections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h3 className="border-l-4 border-red-600 pl-2 text-xl font-bold text-neutral-800">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {section.menus.map((menu) => (
                  <Card
                    key={menu.name}
                    className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg"
                  >
                    <CardContent className="p-0">
                      <div className="h-32 w-full overflow-hidden bg-orange-100">
                        <img
                          src={menu.image}
                          alt={menu.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="space-y-2 p-3">
                        <div>
                          <p className="line-clamp-2 text-sm font-bold text-neutral-900">
                            {menu.name}
                          </p>

                          <p className="text-xs text-orange-600">
                            {menu.category}
                          </p>

                          <p className="mt-1 text-lg font-bold text-red-700">
                            {menu.price}
                          </p>
                        </div>

                        <Button className="h-9 w-full rounded-xl bg-red-600 text-sm text-white hover:bg-red-700">
                          追加
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-neutral-800">注文</h2>

            <Card className="rounded-3xl border-0 bg-white shadow-md">
              <CardContent className="space-y-4 p-5">
                <div>
                  <p className="font-semibold text-neutral-800">
                    現在の注文
                  </p>
                  <p className="text-sm text-neutral-500">
                    まだ商品は追加されていません。
                  </p>
                </div>

                <Button className="h-11 w-full rounded-xl bg-neutral-900">
                  注文リストを見る
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>

        <footer className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white/95 px-4 py-3 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-sm items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-neutral-500">合計</p>
              <p className="text-xl font-bold text-neutral-900">0円</p>
            </div>

            <Button className="h-12 flex-1 rounded-2xl bg-orange-500 text-base font-bold hover:bg-orange-600">
              注文を確認する
            </Button>
          </div>
        </footer>
      </div>
    </main>
  )
}
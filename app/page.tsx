import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menus = [
  {
    name: "広島風お好み焼き",
    price: "980円",
    category: "主菜",
    description: "キャベツたっぷり本格派",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
  },
  {
    name: "背徳バターポテト",
    price: "520円",
    category: "サイド",
    description: "学生人気No.1",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },
  {
    name: "深夜の唐揚げ定食",
    price: "880円",
    category: "主菜",
    description: "がっつり食べたい人向け",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
  },
  {
    name: "限界ねぎ塩ラーメン",
    price: "790円",
    category: "主菜",
    description: "疲れた体にしみる一杯",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
  },
  {
    name: "無限枝豆",
    price: "390円",
    category: "サイド",
    description: "つい手が止まらない",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41",
  },
  {
    name: "青春クリームソーダ",
    price: "480円",
    category: "ドリンク",
    description: "映え担当の甘いやつ",
    image:
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6">
      <div className="mx-auto max-w-sm space-y-5">
        <header className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-neutral-500">スマホ注文システム</p>
          <h1 className="mt-1 text-3xl font-bold">おおさき亭</h1>
          <p className="mt-2 text-sm text-neutral-600">
            席からスマホで簡単に注文できます。
          </p>
        </header>

        <section className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold">メニュー</h2>
            <p className="text-sm text-neutral-500">
              料理を選んで注文リストに追加できます。
            </p>
          </div>

          {menus.map((menu) => (
            <Card key={menu.name}>
              <CardContent className="flex gap-4 p-4">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-semibold">{menu.name}</p>
                    <p className="text-sm text-neutral-500">
                      {menu.category}・{menu.description}
                    </p>
                    <p className="mt-1 font-bold">{menu.price}</p>
                  </div>

                  <Button className="mt-3 w-full">追加</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">注文リスト</h2>

          <Card>
            <CardContent className="space-y-4 p-4">
              <div>
                <p className="font-semibold">現在の注文</p>
                <p className="text-sm text-neutral-500">
                  追加ボタンから商品を選択できます。
                </p>
              </div>
              <Button className="w-full">注文内容を確認する</Button>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-4">
          <Button className="h-12 w-full text-base">
            注文を確定する
          </Button>
        </footer>
      </div>
    </main>
  )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menus = [
  { name: "広島風お好み焼き", price: "980円", category: "主菜" },
  { name: "背徳バターポテト", price: "520円", category: "サイド" },
  { name: "深夜の唐揚げ定食", price: "880円", category: "主菜" },
  { name: "限界ねぎ塩ラーメン", price: "790円", category: "主菜" },
  { name: "無限枝豆", price: "390円", category: "サイド" },
  { name: "青春クリームソーダ", price: "480円", category: "ドリンク" },
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
              <CardContent className="flex items-center justify-between gap-4 p-4">
                <div>
                  <p className="font-semibold">{menu.name}</p>
                  <p className="text-sm text-neutral-500">{menu.category}</p>
                  <p className="mt-1 font-bold">{menu.price}</p>
                </div>
                <Button>追加</Button>
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
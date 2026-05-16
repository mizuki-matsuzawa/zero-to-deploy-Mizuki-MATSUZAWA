import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6">
      <div className="mx-auto max-w-sm space-y-5">
        <header className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-neutral-500">スマホ注文システム</p>
          <h1 className="mt-1 text-3xl font-bold">自転車部食堂</h1>
          <p className="mt-2 text-sm text-neutral-600">
            席からスマホで簡単に注文できます。
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">メニュー</h2>

          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">背徳バターポテト</p>
                <p className="text-sm text-neutral-500">学生人気</p>
              </div>
              <Button>注文</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">広島風お好み焼き</p>
                <p className="text-sm text-neutral-500">キャベツたっぷり本格派</p>
              </div>
              <Button>注文</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">注文を追加</p>
                <p className="text-sm text-neutral-500">商品を選んで追加</p>
              </div>
              <Button>追加</Button>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">注文</h2>

          <Card>
            <CardContent className="space-y-4 p-4">
              <div>
                <p className="font-semibold">現在の注文</p>
                <p className="text-sm text-neutral-500">
                  まだ商品は追加されていません。
                </p>
              </div>
              <Button className="w-full">注文リストを見る</Button>
            </CardContent>
          </Card>
        </section>

        <footer className="pt-4">
          <Button className="h-12 w-full text-base">
            注文を確認する
          </Button>
        </footer>
      </div>
    </main>
  )
}
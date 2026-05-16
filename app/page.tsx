import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-8 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-widest">OSAKI　プロジェクト</h1>
        <p className="mt-3 text-gray-500">5月16日</p>

        <div className="mx-auto mt-10 max-w-md">
          <Input placeholder="名前を入力してください" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold">おすすめメニュー</h2>
                <p className="mt-2 text-sm text-gray-500">
                  人気の商品を確認できます。
                </p>
              </div>
              <Button className="w-full">見る</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold">注文フォーム</h2>
                <p className="mt-2 text-sm text-gray-500">
                  名前を入力して注文を始めます。
                </p>
              </div>
              <Button className="w-full">注文する</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold">店舗情報</h2>
                <p className="mt-2 text-sm text-gray-500">
                  営業時間やアクセスを確認できます。
                </p>
              </div>
              <Button className="w-full">確認する</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
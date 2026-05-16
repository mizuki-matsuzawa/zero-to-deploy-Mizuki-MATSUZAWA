import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">
        shadcn/ui 動作確認
      </h1>

      <Card className="p-6">
        <CardContent className="space-y-4">
          <Input placeholder="名前を入力" />

          <Button>
            送信
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
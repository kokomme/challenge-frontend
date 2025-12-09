# テスト仕様書

このプロジェクトでは、Vitestと@testing-library/reactを使用してテストを実装しています。

## テストの実行方法

### すべてのテストを実行
```bash
npm run test
```

### テストをUIで確認
```bash
npm run test:ui
```

### テストを1回だけ実行（CI環境向け）
```bash
npm run test:run
```

### カバレッジレポートを生成
```bash
npm run test:coverage
```

## 実装されているテスト

### 1. バリデーション関数のテスト (`src/lib/validation.test.ts`)

#### `validateTitle`
- ✅ 境界値テスト: 0文字はエラー、1文字と50文字は成功、51文字はエラー

#### `validateBody`
- ✅ 境界値テスト: 9文字はエラー、10文字と2000文字は成功、2001文字はエラー

#### `validateContent`
- ✅ 両方のバリデーションを実行し、エラーを配列で返す

### 2. API関数のテスト (`src/features/content/api/contentApi.test.ts`)

#### CRUD操作
- ✅ 全てのコンテンツを取得できる
- ✅ 新規作成・更新・削除が正しいエンドポイントを呼ぶ

### 3. Buttonコンポーネントのテスト (`src/components/ui/button/Button.test.tsx`)

#### 基本機能
- ✅ クリックイベントとdisabled状態が正しく動作する
- ✅ icon variantとアイコン+テキストのレイアウトが正しく適用される

## テストカバレッジ

合計7のテストケースが実装されており、以下の主要な機能をカバーしています：

- **バリデーションロジック**: 3テスト（境界値分析）
- **API通信**: 2テスト（CRUD操作）
- **UIコンポーネント**: 2テスト（インタラクションとレイアウト）

## テストツール

- **Vitest**: 高速なユニットテストフレームワーク
- **@testing-library/react**: Reactコンポーネントのテスト
- **@testing-library/jest-dom**: DOM要素のアサーション拡張
- **@testing-library/user-event**: ユーザーインタラクションのシミュレーション
- **MSW (Mock Service Worker)**: API呼び出しのモック（インストール済み）

## テスト方針

1. **境界値分析**: 複数の境界値を1つのテストで効率的に検証
2. **統合的アプローチ**: 関連する機能を1つのテストにまとめてメンテナンス性を向上
3. **最小限・高品質**: 実際のバグを検出できる重要な機能のみに焦点
4. **メンテナンス性**: 実装の詳細（CSSクラス名など）への依存を最小化

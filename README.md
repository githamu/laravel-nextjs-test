# teamC_training
23卒研修チームCのリポジトリ  
## チーム概要
### メンター
- 花房若奈
### メンバー
- 北垣 拓也
- 長谷川 暖人
- 櫻井 詩織
- 板本 幸之助
- ドウブラリアミン
- 鶴岡 駿
- 吉原 舞
- 角 海音

### 開発環境:
- PHPバージョン:8.2.4
- Composerバージョン:2.5.7
- Laravelバージョン:10.13.0
### PHP環境設定:
- XAMPPのインストール先が「C:\xampp\php」であると仮定します。
- システムの詳細設定に移動し、環境変数を設定します。
- 新しい変数を作成し、変数名を「PATH」、変数値を「C:\xampp\php」として追加します。

### PHPのバージョン確認:
- コマンドプロンプトを開き、「php -v」と入力し、Enterキーを押します。
- インストールされているPHPのバージョンが表示されます。

### Composerのインストール:
- Composerの公式ウェブサイト（https://getcomposer.org/download/）にアクセスします。
- ページの指示に従ってComposerをダウンロードし、インストールします。
- インストールが完了したら、コマンドプロンプトを再起動。

### Composerのインストール確認とバージョン確認:
- コマンドプロンプトを開きます。
- 「composer -v」と入力し、Enterキーを押します。
- インストールされているComposerのバージョンが表示されます。

### Laravelのインストール:
- コマンドプロンプトを開きます。
- 「composer global require "laravel/installer"」と入力し、Enterキーを押します。
- Laravelのインストールが始まります。しばらく待ってください。

### Laravelのバージョン確認:
- コマンドプロンプトを開きます。
- 「laravel -v」と入力し、Enterキーを押します。
- インストールされているLaravelのバージョンが表示されます。

### Laravelワークスペースの作成:
- コマンドプロンプトを開き、作業ディレクトリを移動します。
- 例えば、「cd c:\xampp\htdocs」と入力し、Enterキーを押します。
- 移動したディレクトリで以下のコマンドを入力し、新しいLaravelプロジェクトを作成します。
- 「laravel new プロジェクト名」と入力し、Enterキーを押します。

これで、PHPの環境設定、ComposerとLaravelのインストール、Laravelワークスペースの作成が完了。

### next.jsのインストール

https://reffect.co.jp/laravel/laravel-breeze-next-js/

```
laravel new laravel-project-name

cd laravel-project-name
composer require laravel/breeze --dev

php artisan breeze:install api
```

.envファイルにFRONTEND_URL=http://localhost:3000が追加されていることを確認
config/cors.phpファイルに'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],が追加されていることを確認

```
git clone https://github.com/laravel/breeze-next.git nextjs-project-name
```

laravel,nextjsプロジェクト内の.git、.githubを削除

nextjs内のlicense.me、leadme.me、release.meを削除

laravelプロジェクト内のgitignoreファイルを

### .gitignore
```gitignore

/.phpunit.cache
/node_modules
.phpunit.result.cache
npm-debug.log
yarn-error.log
/.fleet
/.idea
/.vscode


# dependencies
/nextjs/node_modules
/nextjs/.pnp
/nextjs/pnp.js

# testing
/nextjs/coverage

# next.js
/nextjs/.next/
/nextjs/out/

# production
/nextjs/build

# misc
/nextjs/DS_Store
/nextjs/*.pem

# debug
/nextjs/npm-debug.log*
/nextjs/yarn-debug.log*
/nextjs/yarn-error.log*

# vercel
/nextjs/.vercel

/vendor

```

に変更し、nextjsプロジェクト内のgitignoreファイルを削除

```
composer i
cd nextjs
npm i
```

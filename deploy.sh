#!/usr/bin/env sh
 
# 發生錯誤時執行終止指令
set -e
 
# 打包編譯
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
 
# navigate into the build output directory
# 因為 npm run build 出來的檔案預設是會被 gitignore 忽略的，所以要手動切換目錄
cd dist
 
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
 
git init
git add -A
git commit -m 'deploy'
 
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
 
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/Jasmine3Ke/Self.git master:gh-pages
 
cd -
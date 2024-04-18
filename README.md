拉模板代码 
shopify theme pull --store=jasionbike.myshopify.com
shopify theme push --store=jasionbike.myshopify.com

启动本地开发
shopify theme dev -e dev

启动tailwind监听
npx tailwindcss -i ./assets/app-tailwind.css -o ./assets/tw-custom.css --watch
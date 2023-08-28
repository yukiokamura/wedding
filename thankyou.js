const url = new URL(location.href);
const tit = document.querySelector(".thankyou-ja-tit");
const des = document.querySelector(".thankyou-des");
import Cookies from "js-cookie";
if (url.searchParams.get("error")) {
  tit.textContent = "申し訳ございません 送信できませんでした";
  des.textContent =
    "お手数ですが岡村か佐藤に個別でご連絡いただけますと幸いです";
}

Cookies.remove("formData");

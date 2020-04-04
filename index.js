const puppeteer=require('puppeteer');
const readline = require('readline');

let hoVaTen="Đặng Lê Minh Trường";

let mssv = "17019711";
let lop = "DHKTPM13ATT";
let sdt = "0399006902";
let email = "dlmtruong1609";
let maLopHP = "422000244704";
(async()=>{

const browser=await puppeteer.launch({headless:false});

const page=await browser.newPage();

await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSc2UHIVknOv7bzuOXBXzosvshTOFwrcpQXWl82fJzXQmbTxPw/viewform');
// Nhập email vào ô đăng nhập
await	page.type("input[aria-label='HỌ TÊN SV']", hoVaTen);

await	page.type("input[aria-label='MSSV']", mssv);
await	page.type("input[aria-label='LỚP']", lop);
await	page.type("input[aria-label='SỐ ĐT']", sdt);
await	page.type("input[aria-label='EMAIL']", email);
await	page.type("input[aria-label='MÃ LỚP HỌC PHẦN (Ví dụ: 420300081101)']", maLopHP);

await	page.click("div[aria-label='ĐỒNG Ý");
await	page.click(".appsMaterialWizButtonEl");
// Đợi trang tải xong
await	page.waitForNavigation();
})();
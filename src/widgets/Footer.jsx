import "./Footer.css";

const Footer = () => {
  return (
    <footer className="sticky top-full text-xs footer">
      <div
        className="h-full mx-auto my-0 max-w-5xl"
        style={{ padding: "0 22px" }}
      >
        <nav className="pt-5 flex">
          <div className="flex-1">
            <h3 className="mb-2.5 font-semibold">选购及了解</h3>
            <ul>
              <li className="cursor-pointer mb-2.5 hover:underline">商店</li>
              <li className="cursor-pointer mb-2.5 hover:underline">Mac</li>
              <li className="cursor-pointer mb-2.5 hover:underline">iPad</li>
              <li className="cursor-pointer mb-2.5 hover:underline">iPhone</li>
              <li className="cursor-pointer mb-2.5 hover:underline">Watch</li>
              <li className="cursor-pointer mb-2.5 hover:underline">AirPods</li>
              <li className="cursor-pointer mb-2.5 hover:underline">家居</li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                Apple 独家
              </li>
              <li className="cursor-pointer mb-2.5 hover:underline">配件</li>
              <li className="cursor-pointer hover:underline">技术支持</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="mb-2.5 font-semibold">服务</h3>
            <ul>
              <li className="cursor-pointer mb-2.5 hover:underline">
                Apple Music
              </li>
              <li className="cursor-pointer mb-2.5 hover:underline">iCloud</li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                Apple Pay
              </li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                Apple 播客
              </li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                App Store
              </li>
            </ul>

            <h3 className="mb-2.5 font-semibold mt-5">账户</h3>
            <ul>
              <li className="cursor-pointer mb-2.5 hover:underline">账户</li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                管理你的 Apple ID
              </li>
              <li className="cursor-pointer mb-2.5 hover:underline">
                iCloud.com
              </li>
            </ul>
          </div>
        </nav>
        <section className="pt-8 pb-5 footer-contact">
          <div className="pb-2 mb-1.5">
            更多选购方式：
            <a href="#" className="footer-link hover:underline">
              查找你附近的 Apple Store 零售店
            </a>
            及
            <a href="#" className="footer-link hover:underline">
              更多门店
            </a>
            ，或者致电 400-666-8800
          </div>
          <div className="flex">
            <div className="mt1.5 mr-7">
              Copyright © 2022 Apple Inc. 保留所有权利。
            </div>
            <div>
              <a href="#" className="mr-8 hover:underline">
                隐私政策
              </a>
              <a href="#" className="mr-8 hover:underline">
                使用条款
              </a>
              <a href="#" className="mr-8 hover:underline">
                销售政策
              </a>
              <a href="#" className="mr-8 hover:underline">
                法律信息
              </a>
              <a href="#" className="hover:underline">
                网站地图
              </a>
            </div>
          </div>
          <p className="mt-1.5">
            <a href="#" className="mr-1.5 hover:underline">
              京ICP备10214630号
            </a>
            <a href="#" className="mr-1.5 hover:underline">
              营业执照
            </a>
            无线电发射设备销售备案编号11201910351200
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

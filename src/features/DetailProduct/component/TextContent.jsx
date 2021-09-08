import React, { useState } from "react";
import "../asset/css/textContent.scss";

export default function TextContent() {
  const [isshow, setIsshow] = useState(false);
  return (
    <>
      <div className='app__main-content'>
        <h2 className='app__main-content-title'>Chi tiết sản phẩm</h2>
        <div id='text' className={isshow && "d-show"}>
          <p className='app__main-content-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est ipsam modi. Quasi
            non in a aperiam soluta similique vel harum, inventore nulla corporis ut officia
            provident cumque obcaecati exercitationem.
          </p>
          <p className='app__main-content-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolore eum. Quidem
            beatae aliquam temporibus ad corporis sequi veniam quia mollitia tempore, quae nemo
            nostrum harum, dicta pariatur quos, culpa eligendi dolorum? Voluptas porro voluptate
            deleniti debitis architecto voluptatum reiciendis ex provident perferendis! Quaerat,
            quos repellendus? Veritatis magni consequuntur incidunt.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Tempora, dolore eum. Quidem beatae aliquam temporibus ad
            corporis sequi veniam quia mollitia tempore, quae nemo nostrum harum, dicta pariatur
            quos, culpa eligendi dolorum? Voluptas porro voluptate deleniti debitis architecto
            voluptatum reiciendis ex provident perferendis! Quaerat, quos repellendus? Veritatis
            magni consequuntur incidunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tempora, dolore eum. Quidem beatae aliquam temporibus ad corporis sequi veniam quia
            mollitia tempore, quae nemo nostrum harum, dicta pariatur quos, culpa eligendi dolorum?
            Voluptas porro voluptate deleniti debitis architecto voluptatum reiciendis ex provident
            perferendis! Quaerat, quos repellendus? Veritatis magni consequuntur incidunt.
          </p>
          <p className='app__main-content-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est ipsam modi. Quasi
            non in a aperiam soluta similique vel harum, inventore nulla corporis ut officia
            provident cumque obcaecati exercitationem.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis est ipsam modi. Quasi non in a aperiam soluta similique vel
            harum, inventore nulla corporis ut officia provident cumque obcaecati
            exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est
            ipsam modi. Quasi non in a aperiam soluta similique vel harum, inventore nulla corporis
            ut officia provident cumque obcaecati exercitationem.
          </p>
        </div>
        <div>
          <span
            className={!isshow ? "app__main-content-button  d-none" : "app__main-content-button"}
            onClick={() => setIsshow(false)}
          >
            Thu gọn
          </span>
          <span
            className={isshow ? "app__main-content-button  d-none" : "app__main-content-button"}
            onClick={() => setIsshow(true)}
          >
            Xem them
          </span>
          '
        </div>
      </div>
    </>
  );
}

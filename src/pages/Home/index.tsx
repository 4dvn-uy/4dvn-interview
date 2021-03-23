import React from 'react';
import { Box, Loading, Code } from '../../components';
import './index.scss';
import img_001 from '../../assets/images/001.png';

const Home: React.FC = () => {
  document.title = '4DVN Interview | Section 1';
  return (
    <div className="page-home">
      <h1>{document.title}</h1>
      <section>
        <h2>Loading Component</h2>
        <div className="row-col3">
          <Box color="blue">
            <Loading />
            <h3>1/ Tạo Loading component</h3>
            <p>
              Loading nằm giữa màn hình, với kích thước hình (thẻ img) là height: 80px, width: 80px, có hiệu ứng xoay
              tròn
            </p>
            <p>Lưu ý: thẻ box đã có "position: relative" sẵn.</p>
            <img src={img_001} alt="example image" />
          </Box>

          <Box>
            <Loading />
            <p>Lorem ipsum dolor sit amet.</p>
          </Box>

          <Box>
            <Loading />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Box>

          <Box color="green">
            {/* <TextField hovaten="Tên của bạn" /> */}
            <h3>2/ Textfield component là 1 input</h3>
            <p>
              và có thêm 1 thuộc tính là <strong>"hovaten"</strong> giá trị là tên của bạn
            </p>
            <Code language="tsx">
              {`<!-- INPUT -->
<TextField hovaten="Tên của bạn" />

<!-- OUTPUT -->
<input type="text" hovaten="Tên của bạn" />`}
            </Code>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Home;

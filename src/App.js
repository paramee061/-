import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="bg-secondary p-2 mb-3 text-left">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        ตารางเทียบแคลเลอรี่
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "none",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3 class="pb-5 pt-3" ref={header1}>อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี</h3>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="card-01.jpg" alt="food1" class="rounded-circle img-fluid mx-auto d-block" width="200" height="200" />
            <p class="food-text p-5 text-center fs-6">ธรรมชาติ มีคุณค่าทางสมุนไพรสูง เพราะมีคุณสมบัติในการบำรุงรักษาธาตุทั้ง 4 เพื่อให้สมดุลกัน กลีบบัวหลวง มีสีสันสวยงาม 
            มีสรรพคุณบำรุงร่างกาย ห้ามเลือด มีเส้นใยอาหารสูง และกระตุ้นการขับถ่ายเป็นยาสมานแผล ช่วยบำรุงร่างกายบำรุงหัวใจ ลดความดันโลหิตสูง และลดระดับน้ำตาลในเลือดได้ </p>
            <button type="button" class="btn btn-secondary food-text mx-auto d-block">เรียนรู้เพิ่มเติม> </button>
          </div>
          <div class="col">
            <img src="card-05.jpg" alt="food1" class="rounded-circle img-fluid mx-auto d-block" width="200" height="200" />
            <p class="food-text p-5 text-center fs-6">มีโปรตีนและแร่ธาตุต่างๆและสรรพคุณทางยาให้ประโยชน์ช่วยบำรุงร่างกาย ลดอาการร้อนใน เนื่องจากมีฤทธิ์เย็น แก้ช้ำใน 
            แก้ไข้ตัวร้อน ช่วยสมานแผล ลดอาการอักเสบและบวม ช่วยทำให้เลือดแข็งตัวได้เร็วขึ้น บรรเทาอาการคันตามร่างกาย และยังมีส่วนช่วยยับยั้งการเกิดเซลล์มะเร็งอีกด้วย </p>
            <button type="button" class="btn btn-secondary food-text mx-auto d-block">เรียนรู้เพิ่มเติม> </button>
          </div>
          <div class="col">
            <img src="card-07.jpg" alt="food1" class="rounded-circle img-fluid mx-auto d-block" width="200" height="200" />
            <p class="food-text p-5 text-center fs-6">มีสารต่อต้านอนุมูลอิสระช่วยเสริมสร้างภูมิต้านโรคในร่างกายให้แข็งแรง หน่อไม้มีเส้นใยสูง ป้องกันอาการท้องผูก 
            ช่วยระบบขับถ่ายได้เป็นอย่างดี ช่วยลดการเกิดมะเร็งลำไส้ใหญ่ ล้วนมีสรรพคุณต่อสุขภาพร่างกายแทบทั้งสิ้น</p>
            <button type="button" class="btn btn-secondary food-text mx-auto d-block">เรียนรู้เพิ่มเติม> </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  const data = [
    ["เมี่ยงคำกลีบบัวหลวงแบบโบราณ", 250],
    ["แกงเห็ดเผาะไข่มดแดง", 350],
    ["อู๋หน่อไม้พุงปลา", 300],
  ];

  return (
    <>
      <Layout />
      <h4>Products</h4>
      <Table striped border hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
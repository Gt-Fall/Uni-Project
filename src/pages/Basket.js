import GetBasket from "../componets/GetBasket";
import PersonalInfoForm from "../componets/PersonalInfoForm";
import React, { useState, useEffect } from "react";
import supabase from "../componets/supabase";
import emailjs from "@emailjs/browser";

export default function Basket({ basket, setBasket, fabrics }) {
  const isBasketItem = JSON.parse(localStorage.getItem("basket"));

  // const [email, setEmail] = useState("");
  // const [postcode, setPostcode] = useState("");
  // const [orderName, setOrderName] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const orderID = Math.round(Math.random() * 1000000);
  //   const basketSend = JSON.parse(localStorage.getItem("basket"));

  //   if (orderName && postcode && email) {
  //     basketSend.map((basket2) =>
  //       basket2.map(async (basketSend) => {
  //         const { data, error } = await supabase.from("Orders").insert([
  //           {
  //             Order_Number: orderID,
  //             fabric: basketSend.fabric,
  //             size: basketSend.size,
  //             type: basketSend.type,
  //             fleece_colour: basketSend.fleece,
  //             Top_Colour: basketSend.colour1,
  //             Bottom_Colour: basketSend.colour2,
  //             Cuffs_Colour: basketSend.colour3,
  //             postcode: postcode,
  //             email: email,
  //             orderName: orderName,
  //           },
  //         ]);
  //       })
  //     );

  //     function setStock() {
  //       basketSend.map((basket3) =>
  //         basket3.map((basketSend1) => {
  //           fabrics.map(async (fabrics) => {
  //             if (basketSend1.fabric == fabrics.name) {
  //               if (basketSend1.type == "Snood") {
  //                 const { data, error } = await supabase
  //                   .from("Stock")
  //                   .update({ reserved: fabrics.reserved + 0.5 })
  //                   .eq("name", fabrics.name);
  //               } else {
  //                 const { data, error } = await supabase
  //                   .from("Stock")
  //                   .update({ reserved: fabrics.reserved + 2.0 })
  //                   .eq("name", fabrics.name);
  //               }
  //             }
  //           });
  //         })
  //       );
  //     }
  //     setStock();

  //     function sendEmail(e) {
  //       e.preventDefault();

  //       var message = "";

  //       basketSend.map((basket3) =>
  //         basket3.map((basketSend2) => {
  //           message += `Garment: ${basketSend2.type} .. Size: ${basketSend2.size} .. Fabric: ${basketSend2.fabric} .. Fleece_colour: ${basketSend2.fleece} .. Top_colour: ${basketSend2.colour1}.. Bottom_colour: ${basketSend2.colour2}.. Cuffs_colour: ${basketSend2.colour3}  / / / / / / / / / / / / / / / / / / / `;
  //         })
  //       );

  //       console.log("the message is", message);

  //       const values = {
  //         order_name: orderName,
  //         message: message,
  //         postcode: postcode,
  //         email: email,
  //       };
  //       console.log(values);
  //       emailjs
  //         .send("service_gl77v41", "basic", values, "Z_xWZGcqk8z8-agm2")
  //         .then(
  //           (result) => {
  //             window.location.reload();
  //             console.log("email sent");
  //           },
  //           (error) => {
  //             console.log(error.text);
  //           }
  //         );
  //     }
  //     sendEmail(e);
  //     localStorage.removeItem("basket");
  //   }
  // }

  return (
    <>
      <h1 id="basket_heading"> Basket </h1>
      <GetBasket basket={basket} setBasket={setBasket} />
      {isBasketItem ? (
        <PersonalInfoForm basket={basket} fabrics={fabrics} />
      ) : null}
    </>
  );
}

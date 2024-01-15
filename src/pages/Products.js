import Header from "../componets/Header";

export default function Products() {
  return (
    <>
      <h1 class="product_Heading">Avalible Designs</h1>

      <div id="snoods_Info">
        <h2>Snoods</h2>
        <p>
          Snoods are made of two fabrics. First is a pattern which can be picked
          from the Fabrics section of the website. The second is the colour of
          the fleece on the inside.
        </p>
        <div id="pic_table">
          <img
            id="snood_Pic"
            src=" https://pfrszpndyxrzwlpvjxod.supabase.co/storage/v1/object/public/fabrics/Snood.png"
            alt="A picture of a Snood"
          />
          <table id="snood_size_guide">
            <caption id="table_title">Size Guide</caption>
            <tr>
              <th>Size</th>
              <th>Diamitor</th>
              <th>Length</th>
            </tr>
            <tr>
              <td>2 Years</td>
              <td>30cm</td>
              <td>20cm</td>
            </tr>
            <tr>
              <td>2-6 Years</td>
              <td>45cm</td>
              <td>25cm</td>
            </tr>
            <tr>
              <td>6-12 Years</td>
              <td>60cm</td>
              <td>30cm</td>
            </tr>
            <tr>
              <td>Teen</td>
              <td>70cm</td>
              <td>35cm</td>
            </tr>
            <tr>
              <td>Adult</td>
              <td>80cm</td>
              <td>45cm</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="hood_Info">
        <h2>Hoodies</h2>
        <p>
          Hoodies are made from several bands of fabric. First is a pattern
          which can be picked from the Fabrics section of the website. The
          second is the colour of the top are of the hoodie, the tird the lower
          area and lastly the cuffs.
        </p>
        <div id="pic_table2">
          <img
            id="snood_Pic"
            src=" https://pfrszpndyxrzwlpvjxod.supabase.co/storage/v1/object/public/fabrics/Hoodie.png"
            alt="A picture of a Hoodie"
          />
          <div id="hood_Size">
            <table id="hood_size_guide">
              <caption id="table_title">Size Guide</caption>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Arm Lenth</th>
              </tr>
              <tr>
                <td>9-12 M</td>
                <td>30cm</td>
                <td>20cm</td>
              </tr>
              <tr>
                <td>12-18 M</td>
                <td>45cm</td>
                <td>25cm</td>
              </tr>
              <tr>
                <td>18-24 M</td>
                <td>60cm</td>
                <td>30cm</td>
              </tr>
              <tr>
                <td>2-3 Y</td>
                <td>70cm</td>
                <td>35cm</td>
              </tr>
              <tr>
                <td>3-4 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>4-5 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
            </table>
            <table id="hood_size_guide">
              <caption id="table_title">Size Guide</caption>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Arm Lenth</th>
              </tr>
              <tr>
                <td>5-6 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>6-8 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>8-10 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>10-12 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>12-14 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div id="tank_Info">
        <h2>Tanks</h2>
        <p>
          Tanks are similar to Hoodies, the difference is they dont have arms.
          They are made from several bands of fabric. First is a pattern which
          can be picked from the Fabrics section of the website. The second is
          the colour of the top are of the hoodie and the thrid the area at the
          bottom.
        </p>
        <div id="pic_table2">
          <img
            id="snood_Pic"
            src=" https://pfrszpndyxrzwlpvjxod.supabase.co/storage/v1/object/public/fabrics/Tank.png?t=2023-07-17T14%3A14%3A19.370Z"
            alt="A picture of a Tank hoodie"
          />
          <div id="hood_Size">
            <table id="tank_size_guide">
              <caption id="table_title">Size Guide</caption>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Arm Lenth</th>
              </tr>
              <tr>
                <td>9-12 M</td>
                <td>30cm</td>
                <td>20cm</td>
              </tr>
              <tr>
                <td>12-18 M</td>
                <td>45cm</td>
                <td>25cm</td>
              </tr>
              <tr>
                <td>18-24 M</td>
                <td>60cm</td>
                <td>30cm</td>
              </tr>
              <tr>
                <td>2-3 Y</td>
                <td>70cm</td>
                <td>35cm</td>
              </tr>
              <tr>
                <td>3-4 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>4-5 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
            </table>
            <table id="tank_size_guide">
              <caption id="table_title">Size Guide</caption>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Arm Lenth</th>
              </tr>
              <tr>
                <td>5-6 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>6-8 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>8-10 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>10-12 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
              <tr>
                <td>12-14 Y</td>
                <td>80cm</td>
                <td>45cm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

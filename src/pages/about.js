import React from "react"
import { Link } from "gatsby"

import Layout from "../component/layout"
import Title from "../component/title"

export default props => (
  <Layout>
    <Title text="About Me"/>
    <div>
      <Link to={'/'}>Home</Link> | <Link to={'/about'}>About Me</Link>
    </div>
    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at dolore et facere fuga ipsa ipsum iste molestias, perferendis quas quis quod rem repellendus, repudiandae sed tempore unde voluptates.</span><span>Fuga natus possimus tempore totam. Alias aliquid aspernatur commodi cum delectus eveniet harum ipsam labore laudantium maiores nisi, nulla, numquam pariatur provident, quam quo rem saepe totam ut velit? Eius.</span><span>Ab atque corporis debitis dolorum fugiat, illo ipsum itaque nihil provident reiciendis vitae voluptate? Consectetur consequatur eaque illo laudantium quis repellat repellendus soluta tempora ullam vero! Animi consectetur recusandae tenetur?</span><span>A aliquid consectetur corporis dicta dolor enim et iusto labore laudantium nesciunt numquam odio, omnis praesentium quidem quo ratione reprehenderit sequi! Aperiam dolor laudantium quibusdam rerum temporibus, voluptate voluptates? Unde?</span><span>Assumenda eaque eius et fugit neque officiis optio sint! Aliquam consequatur explicabo qui tempore veniam. Accusamus animi dolorem enim hic in natus non officiis quisquam ratione recusandae repellendus, sunt ullam?</span><span>Autem cum debitis dignissimos dolorum eligendi explicabo fuga impedit incidunt nam nihil, quasi, quisquam rem sapiente similique totam. Dignissimos dolorem doloribus ea eligendi itaque possimus, quia quisquam repudiandae sunt unde!</span><span>A accusantium cum earum eum expedita fugit harum illo impedit laboriosam minus, mollitia nesciunt nisi perspiciatis, porro quam quo vero. Dolor inventore ipsam officiis ratione? Esse ex impedit repudiandae vero.</span><span>At blanditiis consequuntur, debitis ea enim ipsum iste iure laborum laudantium magnam magni molestiae molestias nemo neque nobis non odio porro possimus quod quos recusandae repellendus repudiandae sunt suscipit tenetur?</span><span>Aspernatur assumenda at aut consectetur cumque dicta dolorum, eaque exercitationem facilis ipsa magnam maxime minus mollitia nihil placeat possimus quaerat quis quod recusandae reiciendis similique suscipit tempora tempore, totam vel!</span><span>Accusamus fugiat quasi sed similique. A accusamus aliquam animi consequatur eius excepturi exercitationem explicabo facere fugiat incidunt inventore ipsa nisi obcaecati perferendis perspiciatis praesentium, rem? At dolor earum in officiis?</span></p>
  </Layout>
)

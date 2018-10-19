import React from "react"

const Typography = () => (
  <article>
    <h1>Typography</h1>
    <p>This is a sample page used for the development of the typography on this site.  Don't expect it to make much sense after this...</p>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr/>
    <h2>Heading 2</h2>
    <p>Paragraph</p>
    <h3>Heading 3</h3>
    <p>Paragraph</p>
    <h4>Heading 4</h4>
    <p>Paragraph</p>
    <h5>Heading 5</h5>
    <p>Paragraph</p>
    <h6>Heading 6</h6>
    <p>Paragraph</p>
    <hr/>
    <p>Paragraph:</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2:
        <ul>
          <li>Sub-list
            <ul>
              <li>Sub-list</li>
              <li>Sub-list</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>List item 3</li>
    </ul>  
    <p>Paragraph:</p>
    <ol>
      <li>List item 1</li>
      <li>List item 2:
        <ol>
          <li>Sub-list
            <ol>
              <li>Sub-list</li>
              <li>Sub-list</li>
            </ol>
          </li>
        </ol>
      </li>
      <li>List item 3</li>
    </ol>
    <p>Paragraph</p>
    <hr/>
    <p>Paragraph</p>
    <table>
      <thead>
        <tr>
          <td>Header Cell</td>
          <td>Header Cell</td>
          <td>Header Cell</td>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>Footer Cell</td>
          <td>Footer Cell</td>
          <td>Footer Cell</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Regular Cell</td>
          <td>Regular Cell</td>
          <td>Regular Cell</td>
        </tr>
        <tr>
          <td>Regular Cell</td>
          <td>Regular Cell</td>
          <td>Regular Cell</td>
        </tr>
      </tbody>
    </table>
  </article>
)

export default Typography;
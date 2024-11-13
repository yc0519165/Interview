export const HtmlContent = () => {
  return (
    <>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300 ease-in delay-150 ">
        <h3>1. What is HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - HTML stands for HyperText Markup Language. It is a standard text
            formatting language used for developing web pages released in 1993.
          </li>
          <li>
            - HTML is a language that is interpreted by the browser and it tells
            the browser what to display and how to display.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          2. Can we display a web page inside a web page or Is nesting of
          webpages possible?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Yes, we can display a web page inside another HTML web page. HTML
            provides a tag iframe using which we can achieve this functionality.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>3. What are tags and attributes in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tags are the primary component of the HTML that defines how the
            content will be structured/ formatted, whereas Attributes are used
            along with the HTML tags to define the characteristics of the
            element.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>4. What are void elements in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - HTML elements which do not have closing tags or do not need to be
            closed are Void elements. For Example br , img , hr etc.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>5. What is the advantage of collapsing white space?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - In HTML, a blank sequence of whitespace characters is treated as a
            single space character, Because the browser collapses multiple
            spaces into a single space character and this helps a developer to
            indent lines of text without worrying about multiple spaces and
            maintain readability and understandability of HTML codes
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>6. What are different types of lists in HTML?</h3>
        <p>
          In HTML, there are three main types of lists used to display grouped
          items in different formats. Each type serves a distinct purpose and
          has its own HTML tags:
        </p>
        <ul className="flex flex-col  text-lg mt-4 gap-2">
          <h5 className="underline">Ordered List [&lt;ol&gt;]</h5>
          <li>
            - An ordered list is used when the items need to be displayed in a
            specific sequence or order.
          </li>
          <li>
            - Each item is numbered by default (e.g., 1, 2, 3), but you can
            customize it to use other numbering styles like letters or Roman
            numerals.
          </li>
          <h5 className="underline">unOrderlist [&lt;li&gt;]</h5>
          <li>
            - An unordered list is used when the order of items doesnt matter.
          </li>
          <li>
            - Each item is marked with a bullet (•) by default, but the bullet
            style can be customized using CSS.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>7. What is the ‘class’ attribute in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The class attribute is used to specify the class name for an HTML
            element. Multiple elements in HTML can have the same class value.
          </li>
          <li>
            - Also, it is mainly used to associate the styles written in the
            stylesheet with the HTML elements.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          8. What is the difference between the ‘id’ attribute and the ‘class’
          attribute of HTML elements?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Multiple elements in HTML can have the same class value, whereas a
            value of id attribute of one element cannot be associated with
            another HTML element.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>9. Define multipart form data?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Multipart form data is one of the values of the enctype attribute.
          </li>
          <li>
            - It is used to send the file data to the server-side for
            processing.
          </li>
          <li>
            - The other valid values of the enctype attribute are text/plain and
            application/x-www-form-urlencoded.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>10. Describe HTML layout structure.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>&lt;header&gt;</strong>: Stores the starting information
            about the web page.
          </li>
          <li>
            - <strong>&lt;footer&gt;</strong>: Represents the last section of
            the page.
          </li>
          <li>
            - <strong>&lt;nav&gt;</strong>: The navigation menu of the HTML
            page.
          </li>
          <li>
            - <strong>&lt;article&gt;</strong>: It is a set of information.
          </li>
          <li>
            - <strong>&lt;section&gt;</strong>: It is used inside the article
            block to define the basic structure of a page.
          </li>
          <li>
            - <strong>&lt;aside&gt;</strong>: Sidebar content of the page.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>11. How to optimize website assets loading?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>CDN hosting</strong>: A CDN or content delivery network is
            geographically distributed servers to help reduce latency.
          </li>
          <li>
            - <strong>File compression</strong>: This is a method that helps to
            reduce the size of an asset to reduce the data transfer.
          </li>
          <li>
            - <strong>File concatenation</strong>: This reduces the number of
            HTTP calls.
          </li>
          <li>
            - <strong>Minify scripts </strong>: This reduces the overall file
            size of js and CSS files
          </li>
          <li>
            - <strong>Parallel downloads </strong>: Hosting assets in multiple
            subdomains can help to bypass the download limit of 6 assets per
            domain of all modern browsers. This can be configured but most
            general users never modify these settings.
          </li>
          <li>
            - <strong>azy Loading </strong>: Instead of loading all the assets
            at once, the non-critical assets can be loaded on a need basis.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>12. What are the various formatting tags in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong> &lt;b&gt;</strong> : makes text bold
          </li>
          <li>
            - <strong> &lt;i&gt;</strong> : makes text italic
          </li>
          <li>
            - <strong> &lt;em&gt;</strong> : makes text italic but with added
            semantics importance
          </li>
          <li>
            - <strong> &lt;big&gt;</strong> : increases the font size of the
            text by one unit
          </li>
          <li>
            - <strong> &lt;small&gt;</strong> : decreases the font size of the
            text by one unit
          </li>
          <li>
            - <strong> &lt;sub&gt;</strong> : makes the text a subscript
          </li>
          <li>
            - <strong> &lt;sup&gt;</strong> : makes the text a superscript
          </li>
          <li>
            - <strong> &lt;del&gt;</strong> : displays as strike out text
          </li>
          <li>
            - <strong> &lt;strong&gt;</strong> : marks the text as important
          </li>
          <li>
            - <strong> &lt;mark&gt;</strong> : highlights the text
          </li>
          <li>
            - <strong> &lt;ins&gt;</strong> : displays as added text
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>13. What are the different kinds of Doctypes available?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- Strict Doctype</li>
          <li>- Transitional Doctype</li>
          <li>- Frameset Doctype</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          15. What is the difference between &lt;strong&gt;, &lt;b&gt; tags and
          &lt;em&gt;, &lt;i&gt; tags?{" "}
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The effect on a normal webpage of the tags &lt;strong&gt;,
            &lt;b&gt; and &lt;em&gt;, &lt;i&gt; is the same.
          </li>
          <li>
            - &lt;b&gt; and &lt;i&gt; tags stands for bold and italic. These two
            tags only apply font styling and bold tag &lt;b&gt;, just adds more
            ink to the text, these tags dont say anything about the text.
          </li>
          <li>
            - Whereas, &lt;strong&gt; and &lt;em&gt; tags represent that the
            span of text is of strong importance or more importance and emphatic
            stress respectively than the rest of the text.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          16. What is the significance of &lt;head&gt; and &lt;body&gt; tag in
          HTML?{" "}
        </h3>
        <ul className="flex flex-col  text-lg mt-4 gap-2">
          <h5 className="underline">&lt;head&gt; Section</h5>
          <li>
            - &lt;head&gt; tag provides the information about the document.
          </li>
          <li>- It should always be enclosed in the &it;html&gt; tag.</li>
          <li>
            - This tag contains the metadata about the webpage and the tags
            which are enclosed by head tag like &lt;link&gt;, &lt;meta&gt;,
            &lt;style&gt;, &lt;script&gt;, etc. are not displayed on the web
            page.
          </li>
          <li>
            - Also, there can be only 1 &lt;head&gt; tag in the entire Html
            document and will always be before the &lt;body&gt; tag.
          </li>
          <h5 className="underline">&lt;body&gt; Section</h5>
          <li>- &lt;body&gt; tag defines the body of the HTML document.</li>
          <li>- It should always be enclosed in the &lt;html&gt; tag.</li>
          <li>
            - All the contents which needs to be displayed on the web page like
            images, text, audio, video, contents, using elements like &lt;p&gt;,
            &lt;img&gt;, &lt;audio&gt;, &lt;heading&gt;, &lt;video&gt;,
            &lt;div&gt;, etc. will always be enclosed by the &lt;body&gt; tag.
          </li>
          <li>
            - Also, there can be only 1 body element in an HTML document and
            will always be after the &lt;head&gt; tag.
          </li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>17. Are the HTML tags and elements the same thing?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - No. HTML elements are defined by a starting tag, may contain some
            content and a closing tag.
          </li>
          <li>
            - For example, &lt;h1&gt;Heading 1 &lt;/h1&gt; is a HTML element but
            just &lt;h1&gt; is a starting tag and &lt;/h1&gt; is a closing tag.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>18. How is Cell Padding different from Cell Spacing?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Cell Spacing is the space or gap between two consecutive cells.
          </li>
          <li>
            - Whereas, Cell Padding is the space or gap between the text/
            content of the cell and the edge/ border of the cell.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          19. How can we club two or more rows or columns into a single row or
          column in an HTML table?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - HTML provides two table attributes “rowspan” and “colspan” to make
            a cell span to multiple rows and columns respectively.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          20. Is it possible to change an inline element into a block level
          element?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Yes, it is possible using the “display” property with its value as
            “block”, to change the inline element into a block-level element.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          21. In how many ways can we position an HTML element? Or what are the
          permissible values of the position attribute?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>static</strong>: Default value. Here the element is
            positioned according to the normal flow of the document.
          </li>
          <li>
            - <strong>absolute</strong>: Here the element is positioned relative
            to its parent element. The final position is determined by the
            values of left, right, top, bottom.
          </li>
          <li>
            - <strong>fixed</strong>: This is similar to absolute except here
            the elements are positioned relative to the &it;html&gt; element.
          </li>
          <li>
            - <strong>relative</strong>: Here the element is positioned
            according to the normal flow of the document and positioned relative
            to its original/ normal position.
          </li>
          <li>
            - <strong>initial</strong>: This resets the property to its default
            value.
          </li>
          <li>
            - <strong>inherit</strong>: Here the element inherits or takes the
            property of its parent.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          23. What is the difference between “display: none” and “visibility:
          hidden”, when used as attributes to the HTML element.
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - When we use the attribute “visibility: hidden” for an HTML element
            then that element will be hidden from the webpage but still takes up
            space.
          </li>
          <li>
            - Whereas, if we use the “display: none” attribute for an HTML
            element then the element will be hidden, and also it won’t take up
            any space on the webpage.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          24. How to specify the link in HTML and explain the target attribute?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - HTML provides a hyperlink - &lt;a&gt; tag to specify the links in
            a webpage.
          </li>
          <li>
            - The ‘href’ attribute is used to specify the link and the ‘target’
            attribute is used to specify, where do we want to open the linked
            document.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          25. In how many ways can we specify the CSS styles for the HTML
          element?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>Inline</strong>: Here we use the ‘style’ attribute inside
            the HTML element.
          </li>
          <li>
            - <strong>Internal</strong>: Here we use the &lt;style&gt; tag
            inside the &lt;head&gt; tag. To apply the style we bind the elements
            using ‘id’ or ‘class’ attributes.
          </li>
          <li>
            - <strong>External</strong>: Here we use the &lt;link&gt; tag inside
            &lt;head&gt; tag to reference the CSS file into our HTML code. Again
            the binding between elements and styles is done using ‘id’ or
            ‘class’ attributes.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          26. Difference between link tag &lt;link&gt; and anchor tag &lt;a&gt;?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The anchor tag &lt;a&gt; is used to create a hyperlink to another
            webpage or to a certain part of the webpage and these links are
            clickable.
          </li>
          <li>
            - Link tag &lt;link&gt; defines a link between a document and an
            external resource and these are not clickable.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>27. How to handle events in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - HTML allows event trigger actions in browsers using javascript or
            JQuery. There are a lot of events like ‘onclick’, ‘ondrag’,
            ‘onchange’, etc.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>28. What are forms and how to create forms in HTML?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The HTML form is used to collect the user inputs. HTML provides a
            &lt;form&gt; tag to create forms.
          </li>
          <li>
            - To take input from the user we use the &lt;input&gt; tag inside
            the form so that all collected user data can be sent to the server
            for processing.
          </li>
          <li>
            - There are different input types like ‘button’, ‘checkbox’,
            ‘number’, ‘text’, ‘password’, ‘submit’ etc.
          </li>
        </ul>
      </div>
    </>
  );
};

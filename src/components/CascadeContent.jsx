export const CssContent = () => {
  return (
    <>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300 ease-in delay-150 ">
        <h3>1. What is CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - CSS stands for Cascading Style Sheet. It’s a style sheet language
            that determines how the elements/contents in the page are
            looked/shown.
          </li>
          <li>
            - CSS is used to develop a consistent look and feel for all the
            pages.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>2. What are the advantages of using CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <u>Separation of content from presentation</u>: CSS provides a way
            to present the same content in multiple presentation formats in
            mobile or desktop or laptop.
          </li>
          <li>
            - <u>Easy to maintain</u>: CSS, built effectively can be used to
            change the look and feel complete by making small changes. To make a
            global change, simply change the style, and all elements in all the
            web pages will be updated automatically.
          </li>
          <li>
            - <u>Bandwidth</u>: Used effectively, the style sheets will be
            stored in the browser cache and they can be used on multiple pages,
            without having to download again.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          3. How do you specify units in the CSS?. What are the different ways
          to do it?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - There are different ways to specify units in CSS like px, em, pt,
            percentage (%).
          </li>
          <li>
            - px(Pixel) gives fine-grained control and maintains alignment
            because 1 px or multiple of 1 px is guaranteed to look sharp.
          </li>
          <li>
            - px is not cascade. em maintains relative size. you can have
            responsive fonts.
          </li>
          <li>
            - Em, will cascade 1em is equal to the current font-size of the
            element or the browser default.
          </li>
          <li>
            - If u sent font-size to 16px then 1em = 16px. The common practice
            is to set default body font-size to 62.5% (equal to 10px).
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          4. What is the Box model in CSS? Which CSS properties are a part of
          it?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- A rectangle box is wrapped around every HTML element.</li>
          <li>
            - The box model is used to determine the height and width of the
            rectangular box.
          </li>
          <li>
            - The CSS Box consists of Width and height (or in the absence of
            that, default values and the content inside), padding, borders,
            margin.
          </li>
          <li>
            • <u>Content</u>: Actual Content of the box where the text or image
            is placed.
          </li>
          <li>
            • <u>Padding</u>: Area surrounding the content (Space between the
            border and content).
          </li>
          <li>
            • <u>Border</u>: Area surrounding the padding.
          </li>
          <li>
            • <u>Margin</u>: Area surrounding the border.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>5. What are the limitations of CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • <u>Browser Compatibility</u>: Some style selectors are supported
            and some are not. We have to determine which style is supported or
            not using the (@support selector).
          </li>
          <li>
            • <u>Cross Browser issue</u>: Some selectors behave differently in a
            different browser.
          </li>
          <li>
            • <u>There is no parent selector</u>: Currently, Using CSS, you
            can’t select a parent tag.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>6. What are the different types of Selectors in CSS?</h3>
        <ul className="flex flex-col  text-lg mt-4 gap-2">
          <li>
            • <u>Universal Selector</u>: The universal selector works like a
            wildcard character, selecting all elements on a page. In the given
            example, the provided styles will get applied to all the elements on
            the page.
          </li>
          <li>
            • <u>Element Type Selector</u>: This selector matches one or more
            HTML elements of the same name. In the given example, the provided
            styles will get applied to all the ul elements on the page.
          </li>
          <li>
            • <u>ID Selector</u>: This selector matches any HTML element that
            has an ID attribute with the same value as that of the selector. In
            the given example, the provided styles will get applied to all the
            elements having ID as a container on the page.
          </li>
          <li>
            • <u>Class Selector</u>: The class selector also matches all
            elements on the page that have their class attribute set to the same
            value as the class. In the given example, the provided styles will
            get applied to all the elements having ID as the box on the page.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>8. What is VH/VW (viewport height/ viewport width) in CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - It’s a CSS unit used to measure the height and width in percentage
            with respect to the viewport.
          </li>
          <li>- It is used mainly in responsive design techniques.</li>
          <li>
            - The measure VH is equal to 1/100 of the height of the viewport.
          </li>
          <li>
            - If the height of the browser is 1000px, 1vh is equal to 10px.
          </li>
          <li>
            - Similarly, if the width is 1000px, then 1 vw is equal to 10px.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          9. Difference between reset vs normalize CSS?. How do they differ?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <u>Reset CSS</u>: CSS resets aim to remove all built-in browser
            styling. For example margins, paddings, font-sizes of all elements
            are reset to be the same.
          </li>
          <li>
            - <u>Normalize CSS</u>: Normalize CSS aims to make built-in browser
            styling consistent across browsers. It also corrects bugs for common
            browser dependencies.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          10. What is the difference between inline, inline-block, and block?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <u>Block Element</u>: The block elements always start on a new
            line. They will also take space for an entire row or width. List of
            block elements are &lt;div&gt;, &lt;p&gt;.
          </li>
          <li>
            - <u>Inline Elements</u>: Inline elements dont start on a new line,
            they appear on the same line as the content and tags beside them.
            Some examples of inline elements are &lt;a&gt;, &lt;span&gt; ,
            &lt;strong&gt;, and &lt;img&gt; tags.
          </li>
          <li>
            - <u>Inline Block Elements</u>: Inline-block elements are similar to
            inline elements, except they can have padding and margins and set
            height and width values.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>11. What are Pseudo elements and Pseudo classes?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>Pseudo-elements</strong> allows us to create items that do
            not normally exist in the document tree, for example
          </li>
          <li>• ::before</li>
          <li>• ::after</li>
          <li>• ::first-line</li>
          <li>• ::first-letter</li>
          <li>• ::sellection</li>
          <li>
            - <strong>Pseudo-classes</strong> select regular elements but under
            certain conditions like when the user is hovering over the link.
          </li>
          <li>• ::link</li>
          <li>• ::visited</li>
          <li>• ::hover</li>
          <li>• ::active</li>
          <li>• ::focus</li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>12. What is cascading in CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - “Cascading” refers to the process of going through the style
            declarations and defining weight or importance to the styling rules
            that help the browser to select what rules have to be applied in
            times of conflict.
          </li>
          <li>
            - The conflict here refers to multiple rules that are applicable to
            a particular HTML element.
          </li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>13. What property is used for changing the font face?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - We can use the font-family property for achieving this. The
            font-family property is used for specifying what font needs to be
            applied on the targetted DOM element.
          </li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          14. What are the differences between adaptive design and responsive
          design?{" "}
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            <u>Adaptive Design</u>:
          </li>
          <li>
            - Adaptive design focuses on developing websites based on multiple
            fixed layout sizes.
          </li>
          <li>
            - Usually, adaptive designs use six standard screen widths - 320 px,
            480 px, 760 px, 960 px, 1200 px, 1600 px. These sizes are detected
            and appropriate layouts are loaded.
          </li>
          <li>
            - Gives a lot of control over the design to develop sites for
            specific screens.
          </li>
          <li>
            <u>Responsive Design</u>:
          </li>
          <li>
            - Responsive design focuses on showing content on the basis of
            available browser space.
          </li>
          <li>
            - This design makes use of CSS media queries for changing styles
            depending on the target devices properties for adapting to different
            screens.
          </li>
          <li>- No much control over the design is offered here.</li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>15. How is border-box different from content-box? </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            <u>Content-Box</u>:
          </li>
          <li>- content-box is the default value box-sizing property.</li>
          <li>
            -The height and the width properties consist only of the content by
            excluding the border and padding.
          </li>
          <li>
            <u>Border-Box</u>:
          </li>
          <li>
            - The border-box property includes the content, padding and border
            in the height and width properties.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>16. How is opacity specified in CSS3?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Opacity refers to the degree to which the content is transparent
            or opaque.
          </li>
          <li>
            - Opacity which takes the values ranging from 0 to 1. 0 specifies
            that the element is completely transparent where 1 means that the
            element is completely opaque.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>17. What is a z-index, how does it function?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - z-index is used for specifying the vertical stacking of the
            overlapping elements that occur at the time of its positioning.
          </li>
          <li>
            - It specifies the vertical stack order of the elements positioned
            that helps to define how the display of elements should happen in
            cases of overlapping.
          </li>
          <li>• Auto: The stack order will be set equal to the parent.</li>
          <li>
            • Number: The number can be positive or negative. It defines the
            stack order.
          </li>
          <li>• Initial: The default value of 0 is set to the property.</li>
          <li>• Inherit: The properties are inherited from the parent.</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>18. Difference between CSS grid vs flexbox?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - CSS Grid Layout is a two-dimensional system, meaning it can handle
            both columns and rows. Grid layout is intended for larger-scale
            layouts which aren’t linear in design.
          </li>
          <li>
            - Flexbox is largely a one-dimensional system (either in a column or
            a row). Flexbox layout is most appropriate to the components of an
            application.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>19. Explain CSS position property?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • <u>Absolute</u>: To place an element exactly where you want to
            place it. absolute position is actually set relative to the elements
            parent.
          </li>
          <li>
            • <u>Relative</u>: Relative to itself. Setting position: relative;
            on an element and no other positioning attributes, it will no effect
            on its positioning. It allows the use of z-index on the element and
            it limits the scope of absolutely positioned child elements.
          </li>
          <li>
            • <u>Fixed</u>: The element is positioned relative to the viewport
            or the browser window itself. viewport doesnt change if you scroll
            and hence the fixed element will stay right in the same position.{" "}
          </li>
          <li>
            • <u>Static</u>: Static default for every single page element. The
            only reason you would ever set an element to position: static is to
            forcefully remove some positioning that got applied to an element
            outside of your control.
          </li>
          <li>
            • <u>Sticky</u>: Sticky positioning is a hybrid of relative and
            fixed positioning. The element is treated as relative positioned
            until it crosses a specified threshold, at which point it is treated
            as fixed positioned.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>20. Different Box Sizing Property?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The box-sizing CSS property sets how the total width and height of
            an element are calculated.
          </li>
          <li>
            • Content-box: The default width and height values apply to the
            elements content only. The padding and border are added to the
            outside of the box.
          </li>
          <li>
            • Padding-box: Width and height values apply to the elements content
            and its padding. The border is added to the outside of the box.
            Currently, only Firefox supports the padding-box value.
          </li>
          <li>
            • Border-box: Width and height values apply to the content, padding,
            and border.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>16. What is the grid system?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - CSS Grid Layout is the most powerful layout system available in
            CSS. It is said to be a 2-dimensional system, meaning it can handle
            both columns and rows, unlike flexbox which is largely a
            1-dimensional system.
          </li>
        </ul>
      </div>
    </>
  );
};

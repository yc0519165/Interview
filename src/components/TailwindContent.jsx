export const TailwindContent = () => {
  return (
    <>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>1. Why do we use Tailwind CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tailwind CSS is used to design and style web pages fast and
            Responsive.
          </li>
          <li>
            - Rapid Development, Highly Customizable, Reduced CSS File Size,
            Great Documentation, and Community Support are the main reasons for
            using Tailwind CSS.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>2. Explain the concept of utility-first in Tailwind CSS</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tailwind CSS is a utility-first CSS framework which means we can
            use utility classes to build custom designs without writing CSS as
            in the traditional approach.
          </li>
          <li>
            - This approach prioritizes simplicity, rapid development, and a
            modular way of applying styles.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>3. How to integrate Tailwind CSS into the HTML file?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - We can easily integrate the tailwind CSS to the project via CDN
            links and by installing it from npm or yarn.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>4. Is Tailwind CSS open-source (FREE to use)?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tailwind CSS is an open-source project, available for free usage
            and utility-first CSS framework that provides responsiveness.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          5. What is Drop Shadow in Tailwind CSS ? Explain various utility
          classes.
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The Drop Shadow class is used in Tailwind CSS to apply a filter to
            the image for setting the shadow of the image. there are various
            utility classes applied including drop-shadow-sm, drop-shadow,
            drop-shadow-md, drop-shadow-lg, drop-shadow-xl, drop-shadow-2xl and
            drop-shadow-none.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          6. What is the primary purpose of the container class in Tailwind CSS?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - In Tailwind CSS, a container offers responsive layout, it is used
            to fix the max-width of an element to match the min-width of the
            breakpoint. To center the container, we use mx-auto utility class.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>7. Can we change the base font-family in Tailwind config?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- Yes, we can change the base font-family in Tailwind config.</li>
          <li>
            - To adjust the main font style in Tailwind CSS, you can modify it
            by making changes in the theme part of your configuration file
            (tailwind.config.js).
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>8. Do Tailwind CSS 3 Classes Override Previous Classes?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tailwind CSS is designed to be a low-level utility-first
            framework, which means that classes are not automatically overridden
            by default.
          </li>
          <li>
            - This make the styling process for form elements simple and
            allowing easy customization with utilities.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>9. How to create a form with Tailwind CSS?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Tailwind CSS, offers Tailwind forms as plugins that provide a
            foundational reset for form styles. Install TailwindCSS by writing
            the following command.
          </li>
          <li>
            - We can also use utility classes to make a form with Tailwind CSS,
            use the easy-to-apply classes for backgrounds, borders, shadows,
            etc. Start by creating the form element and use the space-y-n class
            to add vertical spacing between the form controls.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>10. How to center both horizontally and vertically?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- We can easily add utility class self-center.</li>
        </ul>
      </div>
    </>
  );
};

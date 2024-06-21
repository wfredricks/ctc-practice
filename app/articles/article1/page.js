"use client";
import React from 'react';
import { FeedbackContainer } from '../../components/feedback-container';

const Article1 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The History of HTML</h1>
      <p style={styles.paragraph}>
        HTML, or Hypertext Markup Language, is the standard language used to create and design documents on the World Wide Web. Its development has been instrumental in the evolution of the web as we know it today.
      </p>
      <h2 style={styles.heading}>Early Beginnings</h2>
      <p style={styles.paragraph}>
        HTML was first developed by Tim Berners-Lee in 1991. Berners-Lee, a British physicist working at CERN, aimed to create a way for researchers to easily share documents over the internet. His initial proposal outlined a system of hypertext links that could connect different documents, enabling users to navigate from one page to another seamlessly.
      </p>
      <h2 style={styles.heading}>HTML 1.0</h2>
      <p style={styles.paragraph}>
        In 1993, the first official version of HTML, known as HTML 1.0, was released. This version included basic elements like headings, paragraphs, lists, links, and images. It laid the groundwork for the future development of more complex web pages.
      </p>
      <h2 style={styles.heading}>HTML 2.0 and Standardization</h2>
      <p style={styles.paragraph}>
        By 1995, the World Wide Web had grown significantly, and a need for a standardized version of HTML became apparent. HTML 2.0 was published by the Internet Engineering Task Force (IETF), ensuring consistent use across different web browsers and platforms. This version included more features, such as tables and forms, expanding the capabilities of web pages.
      </p>
      <h2 style={styles.heading}>HTML 3.2 and Browser Wars</h2>
      <p style={styles.paragraph}>
        The late 1990s saw the rise of the so-called "browser wars" between Netscape Navigator and Microsoft Internet Explorer. During this period, HTML 3.2 was released, incorporating new features like applets and improved support for scripting languages. The competition between browsers led to rapid advancements in HTML capabilities but also to inconsistencies in how web pages were displayed.
      </p>
      <h2 style={styles.heading}>HTML 4.0 and the DOM</h2>
      <p style={styles.paragraph}>
        HTML 4.0, released in 1997, was a major milestone in the evolution of HTML. It introduced support for stylesheets (CSS) and enhanced scripting abilities, allowing for more dynamic and visually appealing web pages. The Document Object Model (DOM) was also introduced, enabling more sophisticated interaction with HTML documents through JavaScript.
      </p>
      <h2 style={styles.heading}>XHTML and the Move Towards XML</h2>
      <p style={styles.paragraph}>
        In the early 2000s, the World Wide Web Consortium (W3C) proposed XHTML, a reformulation of HTML 4.0 using XML syntax. XHTML aimed to bring more rigor and consistency to web development by enforcing stricter coding standards. However, its complexity and lack of backward compatibility limited its widespread adoption.
      </p>
      <h2 style={styles.heading}>HTML5 and the Modern Web</h2>
      <p style={styles.paragraph}>
        The most significant leap in HTML's history came with the introduction of HTML5 in 2014. HTML5 aimed to provide a comprehensive solution for modern web development, incorporating features like semantic elements, audio and video support, and enhanced graphics capabilities (via the <code>&lt;canvas&gt;</code> element). It also improved support for mobile devices and APIs, such as geolocation and local storage, making it a versatile tool for developers.
      </p>
      <h2 style={styles.heading}>Conclusion</h2>
      <p style={styles.paragraph}>
        The history of HTML is a testament to the rapid evolution of the web. From its humble beginnings as a simple document-sharing tool to its current status as the backbone of modern web development, HTML has continually adapted to meet the changing needs of users and developers. As the web continues to grow and evolve, HTML will undoubtedly remain at the forefront, enabling new innovations and experiences for users worldwide.
      </p>
      <FeedbackContainer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  heading: {
    color: '#555',
  },
  paragraph: {
    color: '#666',
    marginBottom: '20px',
  },
};

export default Article1;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">联系我</h2>
      <p className="text-gray-700">如果您有任何问题或合作意向，请通过以下方式联系我：</p>
      <ul className="mt-4 space-y-2">
        <li>邮箱: <a href="mailto:3466969152@qq.com" className="text-blue-500">3466969152@qq.com</a></li>
      </ul>
    </section>
  );
};

export default Contact;

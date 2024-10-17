import React, { useState, useEffect } from 'react';

// 模拟的项目数据
const projects = [
  {
    title: '项目 1 - TO DO LIST',
    description: '使用浏览器本地存储实现的TO DO LIST',
    url: 'kongzhiyang.me/project/pj1/', // 项目的外部链接
  },
  {
    title: '项目 2 - Calculator',
    description: '功能尚未完善的计算器',
    url: 'kongzhiyang.me/project/pj2/', // 项目的外部链接
  },
  {
    title: '项目 3 - github user search',
    description: '输入github用户名，返回相关信息',
    url: 'kongzhiyang.me/project/pj3/', // 项目的外部链接
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0); // 当前显示的项目
  const [fade, setFade] = useState(true); // 控制淡入淡出

  // 自动轮播功能：每5秒自动切换项目
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 开始淡出动画
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length); // 切换到下一个项目
        setFade(true); // 重新淡入
      }, 500); // 500ms 的淡出时间
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval); // 清除定时器
  }, []);

  // 处理点击圆点切换项目
  const handleDotClick = (index) => {
    setFade(false); // 开始淡出动画
    setTimeout(() => {
      setCurrentProject(index); // 切换到点击的项目
      setFade(true); // 重新淡入
    }, 500); // 500ms 的淡出时间
  };

  return (
    <section id="portfolio" className="bg-white shadow-md rounded-lg p-6 mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4">作品集</h2>
      {/* 项目展示区域 */}
      <div
        className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '150px' }} // 确保容器大小不变
      >
        <div className="bg-gray-200 p-4 rounded-lg inline-block">
          <h3 className="text-xl font-bold mb-2">{projects[currentProject].title}</h3>
          <p className="text-gray-600">{projects[currentProject].description}</p>
          <a
            href={projects[currentProject].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white mt-4 px-4 py-2 rounded"
          >
            View Project
          </a>
        </div>
      </div>

      {/* 圆点导航 */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-4 w-4 rounded-full focus:outline-none ${
              currentProject === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

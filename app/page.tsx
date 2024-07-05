"use client"

import { useState } from "react"

type Course = {
  id: number;
  title: string;
  locked: boolean;
  topics: string[];
};

export default function Component() {
  const [activeCourse, setActiveCourse] = useState<number>(3);
  const [activeTopic, setActiveTopic] = useState<string>("Topic 2");

  const courses: Course[] = [
    { id: 1, title: "Course 1", locked: false, topics: ["Topic 1", "Topic 2", "Topic 3"] },
    { id: 2, title: "Course 2", locked: false, topics: ["Topic 1", "Topic 2", "Topic 3"] },
    { id: 3, title: "Course 3", locked: false, topics: ["Topic 1", "Topic 2", "Topic 3"] },
    { id: 4, title: "Course 4", locked: true, topics: [] },
    { id: 5, title: "Course 5", locked: false, topics: [] },
    { id: 6, title: "Course 6", locked: true, topics: [] },
    { id: 7, title: "Course 7", locked: true, topics: [] },
  ];

  const handleCourseClick = (courseId: number, topic: string): void => {
    setActiveCourse(courseId);
    setActiveTopic(topic);
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="p-8 border-2 border-orange-500">
          <h2 className="text-2xl font-bold">Course {activeCourse}</h2>
          <p>{activeTopic}</p>
        </div>
      </div>
      <div className="w-64 p-4 bg-gray-900">
        <ul className="space-y-2">
          {courses.map((course) => (
            <li key={course.id} className="relative">
              <div
                className={`flex items-center justify-between p-2 rounded cursor-pointer ${course.id === activeCourse ? "bg-gray-700" : "bg-gray-800"
                  }`}
                onClick={() => !course.locked && handleCourseClick(course.id, course.topics[0])}
              >
                <span className="flex items-center">
                  {course.locked ? <LockIcon className="w-4 h-4 mr-2" /> : <LockOpenIcon className="w-4 h-4 mr-2" />}
                  {course.id}. {course.title}
                </span>
                {course.id === activeCourse && <span>Active</span>}
              </div>
              {course.id === activeCourse && course.topics.length > 0 && (
                <ul className="pl-6 space-y-1">
                  {course.topics.map((topic, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${topic === activeTopic ? "text-orange-500" : ""}`}
                      onClick={() => handleCourseClick(course.id, topic)}
                    >
                      {course.id}.{index + 1}. {topic}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LockOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

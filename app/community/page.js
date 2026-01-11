"use client"; // Crucial: Giscus is interactive
import Giscus from '@giscus/react';

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Student Community Forum</h1>
        <p className="text-lg text-gray-600">
          Ask questions, share tips, or discuss exam strategies.
          <br />
          <span className="text-sm bg-yellow-100 p-1 rounded">
            Note: You need a GitHub account to post (it's free!).
          </span>
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border">
        <Giscus
          id="comments"
          // PASTE YOUR REPO ID HERE:
          repoId="R_kgDOKxxxxxxx" 
          repo="your-github-username/makaut-hub"
          // PASTE YOUR CATEGORY ID HERE:
          categoryId="DIC_kwDOKxxxxxxx" 
          mapping="pathname"
          term="Welcome to the MAKAUT Community!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
}
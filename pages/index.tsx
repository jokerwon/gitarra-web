import { useEffect, useRef, useState } from "react";
import { Github } from "gitarra";
import Head from "next/head";
import Input from "../components/Input";
import Loading from "../components/Loading";

export default function Home() {
  const githubRef = useRef<Github>();
  const [username, setUsername] = useState<string>("jokerwon");
  const [repos, setRepos] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/token").then(async response => {
      if (response.status === 200) {
        const result = await response.json();
        githubRef.current = new Github({
          token: result?.token,
        });
      }
    });
  }, []);

  const fetchRepos = () => {
    setRepos([]);
    setLoading(true);
    githubRef.current?.getRepos(username).then(list => {
      setRepos(list);
      setLoading(false);
    });
  };

  return (
    <>
      <Head>
        <title>Gitarra</title>
        <meta name="description" content="Search popular repositories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <header className="flex items-center px-10 py-4">
          <span className="inline-block i-carbon-boolean text-4xl text-emerald"></span>
          <span
            className="ml-2 font-mono text-2xl font-bold"
            style={{ letterSpacing: "-0.06rem" }}
          >
            Gitarra
          </span>
        </header>
        <main className="px-40 py-10 font-mono">
          <h3 className="ma p-10 lh-tight text-6xl text-dark-1 text-center">
            Search popular repositories
          </h3>
          <div className="mb-4 text-center">
            <Input
              selectOnFocus
              value={username}
              placeholder="github username"
              onInput={e => {
                setUsername(e.target.value);
              }}
              onPressEnter={() => {
                fetchRepos();
              }}
            />
          </div>
          <Loading active={loading}>
            {(repos || []).length > 0 ? (
              <div className="mt-10">
                <div className="flex items-center mb-4">
                  <a
                    className="group flex items-center no-underline"
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="inline-block mr-3 i-carbon-logo-github text-xl text-dark"></span>
                    <span className="mr-3 text-2xl">·</span>
                    <span className="flex items-center mr-3">
                      <span className="h-[1.7rem] w-[1.7rem] overflow-hidden rounded-full bg-[var(--level-0)]">
                        {/* eslint-disable-next-line */}
                        <img
                          className="h-full w-full"
                          src={repos?.[0]?.owner?.avatar_url}
                          alt=""
                        />
                      </span>
                    </span>
                    <span className="group-hover-underline text-dark">
                      {repos?.[0]?.owner?.login}
                    </span>
                  </a>
                </div>
                <ul className="list-none grid grid-cols-4 gap-4">
                  {repos?.map(repo => {
                    return (
                      <a
                        key={repo.id}
                        className="flex justify-center items-center p-10 rounded-lg bg-cool-gray cursor-pointer shadow-sm text-dark no-underline transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        // style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.5s' }}
                        href={repo.homepage || repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.name}
                      </a>
                    );
                  })}
                </ul>
              </div>
            ) : loading ? null : (
              <div className="p-20 text-xl text-center">No Data Found.</div>
            )}
          </Loading>
        </main>
      </div>
    </>
  );
}

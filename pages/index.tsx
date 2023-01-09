import { useEffect, useRef, useState } from "react";
import { Github } from "gitarra";
import Head from "next/head";
import Input from "../components/Input";
import Loading from "../components/Loading";

const mock = [
  {
    id: 510955504,
    node_id: "R_kgDOHnSP8A",
    name: "big-react",
    full_name: "jokerwon/big-react",
    private: false,
    owner: {
      login: "jokerwon",
      id: 35907198,
      node_id: "MDQ6VXNlcjM1OTA3MTk4",
      avatar_url: "https://avatars.githubusercontent.com/u/35907198?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jokerwon",
      html_url: "https://github.com/jokerwon",
      followers_url: "https://api.github.com/users/jokerwon/followers",
      following_url:
        "https://api.github.com/users/jokerwon/following{/other_user}",
      gists_url: "https://api.github.com/users/jokerwon/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jokerwon/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jokerwon/subscriptions",
      organizations_url: "https://api.github.com/users/jokerwon/orgs",
      repos_url: "https://api.github.com/users/jokerwon/repos",
      events_url: "https://api.github.com/users/jokerwon/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jokerwon/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/jokerwon/big-react",
    description: "实现React v18的核心功能",
    fork: true,
    url: "https://api.github.com/repos/jokerwon/big-react",
    forks_url: "https://api.github.com/repos/jokerwon/big-react/forks",
    keys_url: "https://api.github.com/repos/jokerwon/big-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jokerwon/big-react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jokerwon/big-react/teams",
    hooks_url: "https://api.github.com/repos/jokerwon/big-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/jokerwon/big-react/issues/events{/number}",
    events_url: "https://api.github.com/repos/jokerwon/big-react/events",
    assignees_url:
      "https://api.github.com/repos/jokerwon/big-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jokerwon/big-react/branches{/branch}",
    tags_url: "https://api.github.com/repos/jokerwon/big-react/tags",
    blobs_url:
      "https://api.github.com/repos/jokerwon/big-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/jokerwon/big-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/jokerwon/big-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/jokerwon/big-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/jokerwon/big-react/statuses/{sha}",
    languages_url: "https://api.github.com/repos/jokerwon/big-react/languages",
    stargazers_url:
      "https://api.github.com/repos/jokerwon/big-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/jokerwon/big-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/jokerwon/big-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/jokerwon/big-react/subscription",
    commits_url:
      "https://api.github.com/repos/jokerwon/big-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jokerwon/big-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jokerwon/big-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jokerwon/big-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jokerwon/big-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jokerwon/big-react/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/jokerwon/big-react/merges",
    archive_url:
      "https://api.github.com/repos/jokerwon/big-react/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/jokerwon/big-react/downloads",
    issues_url:
      "https://api.github.com/repos/jokerwon/big-react/issues{/number}",
    pulls_url: "https://api.github.com/repos/jokerwon/big-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jokerwon/big-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jokerwon/big-react/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/jokerwon/big-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/jokerwon/big-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/jokerwon/big-react/deployments",
    created_at: "2022-07-06T02:07:00Z",
    updated_at: "2022-07-06T02:00:28Z",
    pushed_at: "2022-07-05T08:20:51Z",
    git_url: "git://github.com/jokerwon/big-react.git",
    ssh_url: "git@github.com:jokerwon/big-react.git",
    clone_url: "https://github.com/jokerwon/big-react.git",
    svn_url: "https://github.com/jokerwon/big-react",
    homepage: "https://react.iamkasong.com/",
    size: 398,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 317106092,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTcxMDYwOTI=",
    name: "blog",
    full_name: "jokerwon/blog",
    private: false,
    owner: {
      login: "jokerwon",
      id: 35907198,
      node_id: "MDQ6VXNlcjM1OTA3MTk4",
      avatar_url: "https://avatars.githubusercontent.com/u/35907198?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jokerwon",
      html_url: "https://github.com/jokerwon",
      followers_url: "https://api.github.com/users/jokerwon/followers",
      following_url:
        "https://api.github.com/users/jokerwon/following{/other_user}",
      gists_url: "https://api.github.com/users/jokerwon/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jokerwon/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jokerwon/subscriptions",
      organizations_url: "https://api.github.com/users/jokerwon/orgs",
      repos_url: "https://api.github.com/users/jokerwon/repos",
      events_url: "https://api.github.com/users/jokerwon/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jokerwon/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/jokerwon/blog",
    description: "博客源码",
    fork: false,
    url: "https://api.github.com/repos/jokerwon/blog",
    forks_url: "https://api.github.com/repos/jokerwon/blog/forks",
    keys_url: "https://api.github.com/repos/jokerwon/blog/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jokerwon/blog/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jokerwon/blog/teams",
    hooks_url: "https://api.github.com/repos/jokerwon/blog/hooks",
    issue_events_url:
      "https://api.github.com/repos/jokerwon/blog/issues/events{/number}",
    events_url: "https://api.github.com/repos/jokerwon/blog/events",
    assignees_url:
      "https://api.github.com/repos/jokerwon/blog/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jokerwon/blog/branches{/branch}",
    tags_url: "https://api.github.com/repos/jokerwon/blog/tags",
    blobs_url: "https://api.github.com/repos/jokerwon/blog/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/jokerwon/blog/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/jokerwon/blog/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/jokerwon/blog/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/jokerwon/blog/statuses/{sha}",
    languages_url: "https://api.github.com/repos/jokerwon/blog/languages",
    stargazers_url: "https://api.github.com/repos/jokerwon/blog/stargazers",
    contributors_url: "https://api.github.com/repos/jokerwon/blog/contributors",
    subscribers_url: "https://api.github.com/repos/jokerwon/blog/subscribers",
    subscription_url: "https://api.github.com/repos/jokerwon/blog/subscription",
    commits_url: "https://api.github.com/repos/jokerwon/blog/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jokerwon/blog/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jokerwon/blog/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jokerwon/blog/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/jokerwon/blog/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jokerwon/blog/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/jokerwon/blog/merges",
    archive_url:
      "https://api.github.com/repos/jokerwon/blog/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/jokerwon/blog/downloads",
    issues_url: "https://api.github.com/repos/jokerwon/blog/issues{/number}",
    pulls_url: "https://api.github.com/repos/jokerwon/blog/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jokerwon/blog/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jokerwon/blog/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/jokerwon/blog/labels{/name}",
    releases_url: "https://api.github.com/repos/jokerwon/blog/releases{/id}",
    deployments_url: "https://api.github.com/repos/jokerwon/blog/deployments",
    created_at: "2020-11-30T03:59:46Z",
    updated_at: "2020-11-30T03:59:50Z",
    pushed_at: "2022-11-20T15:38:45Z",
    git_url: "git://github.com/jokerwon/blog.git",
    ssh_url: "git@github.com:jokerwon/blog.git",
    clone_url: "https://github.com/jokerwon/blog.git",
    svn_url: "https://github.com/jokerwon/blog",
    homepage: null,
    size: 460,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
  {
    id: 178185792,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzgxODU3OTI=",
    name: "career",
    full_name: "jokerwon/career",
    private: false,
    owner: {
      login: "jokerwon",
      id: 35907198,
      node_id: "MDQ6VXNlcjM1OTA3MTk4",
      avatar_url: "https://avatars.githubusercontent.com/u/35907198?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jokerwon",
      html_url: "https://github.com/jokerwon",
      followers_url: "https://api.github.com/users/jokerwon/followers",
      following_url:
        "https://api.github.com/users/jokerwon/following{/other_user}",
      gists_url: "https://api.github.com/users/jokerwon/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jokerwon/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jokerwon/subscriptions",
      organizations_url: "https://api.github.com/users/jokerwon/orgs",
      repos_url: "https://api.github.com/users/jokerwon/repos",
      events_url: "https://api.github.com/users/jokerwon/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jokerwon/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/jokerwon/career",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/jokerwon/career",
    forks_url: "https://api.github.com/repos/jokerwon/career/forks",
    keys_url: "https://api.github.com/repos/jokerwon/career/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/jokerwon/career/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/jokerwon/career/teams",
    hooks_url: "https://api.github.com/repos/jokerwon/career/hooks",
    issue_events_url:
      "https://api.github.com/repos/jokerwon/career/issues/events{/number}",
    events_url: "https://api.github.com/repos/jokerwon/career/events",
    assignees_url:
      "https://api.github.com/repos/jokerwon/career/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/jokerwon/career/branches{/branch}",
    tags_url: "https://api.github.com/repos/jokerwon/career/tags",
    blobs_url: "https://api.github.com/repos/jokerwon/career/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/jokerwon/career/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/jokerwon/career/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/jokerwon/career/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/jokerwon/career/statuses/{sha}",
    languages_url: "https://api.github.com/repos/jokerwon/career/languages",
    stargazers_url: "https://api.github.com/repos/jokerwon/career/stargazers",
    contributors_url:
      "https://api.github.com/repos/jokerwon/career/contributors",
    subscribers_url: "https://api.github.com/repos/jokerwon/career/subscribers",
    subscription_url:
      "https://api.github.com/repos/jokerwon/career/subscription",
    commits_url: "https://api.github.com/repos/jokerwon/career/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/jokerwon/career/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/jokerwon/career/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/jokerwon/career/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/jokerwon/career/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/jokerwon/career/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/jokerwon/career/merges",
    archive_url:
      "https://api.github.com/repos/jokerwon/career/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/jokerwon/career/downloads",
    issues_url: "https://api.github.com/repos/jokerwon/career/issues{/number}",
    pulls_url: "https://api.github.com/repos/jokerwon/career/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/jokerwon/career/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/jokerwon/career/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/jokerwon/career/labels{/name}",
    releases_url: "https://api.github.com/repos/jokerwon/career/releases{/id}",
    deployments_url: "https://api.github.com/repos/jokerwon/career/deployments",
    created_at: "2019-03-28T11:02:52Z",
    updated_at: "2022-04-02T07:47:50Z",
    pushed_at: "2022-12-09T05:16:12Z",
    git_url: "git://github.com/jokerwon/career.git",
    ssh_url: "git@github.com:jokerwon/career.git",
    clone_url: "https://github.com/jokerwon/career.git",
    svn_url: "https://github.com/jokerwon/career",
    homepage: null,
    size: 29488,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: true,
      pull: true,
    },
  },
];

export default function Home() {
  const githubRef = useRef<Github>();
  const [username, setUsername] = useState<string>("jokerwon");
  const [repos, setRepos] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    githubRef.current = new Github({
      token: "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",
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

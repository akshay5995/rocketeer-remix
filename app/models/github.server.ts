import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";

type listUserReposResponse =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][];

export interface Repo {
  name: string;
  url: string;
  stars: number;
  description: string | null;
}

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getRepos = async (): Promise<Repo[]> => {
  const { data }: { data: listUserReposResponse } = await octokit.request(
    "/users/akshay5995/repos",
    {
      type: "public",
      sort: "updated",
      per_page: 10,
    }
  );

  const repos = data
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
    }));

  return repos;
};

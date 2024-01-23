import type { GithubUser } from '@/interfaces/GithubUser';
import axios from 'axios';
import { defineStore } from 'pinia'
// import { GithubUser } from '../interfaces/GithubUser';

const githubProfile: string = import.meta.env.VITE_APP_GITHUB_PROFILE;

export const useGithubUserStore = defineStore('githubUser', {
  state: () => ({
    githubUser: <GithubUser>{},
  }),
  // getters: {
  //   user: (state) => state.githubUser,
  // },
  actions: {
    async getGithubUserData() {
      await axios.get<GithubUser>(githubProfile)
        .then((res) => this.githubUser = res.data)
        .catch((errors) => errors)
    }
  },
  persist: true,
});

import { Project } from '@/models';
import { createStore } from 'vuex'
import data from "../assets/data.json";


export default createStore({
	state: {

	},
	mutations: { // eslint-disable-next-line
		SET_PROJECTS(state: any, projects: Array<Project>): void {
			state.projects = projects;
		}
	},
	actions: { // eslint-disable-next-line
		init({commit}: any) {
			commit("SET_PROJECTS", data.projects);
		}
	},
	getters: { // eslint-disable-next-line
		projects(state: any): Array<Project> {
			return data.projects;
		}
	},
	modules: {

	}
})

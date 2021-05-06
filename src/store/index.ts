import { Project, Education } from '@/models';
import { createStore } from 'vuex'
import data from "../assets/data.json";

/* eslint-disable */

export default createStore({
	state: {},
	mutations: {
		SET_PROJECTS(state: any, projects: Array<Project>): void {
			state.projects = projects;
		},
		SET_EDUCATIONS(state: any, educations: Array<Education>): void {
			state.educations = educations;
		},
	},
	actions: {
		init({commit}: any) {
			commit("SET_PROJECTS", data.projects);
			commit("SET_EDUCATIONS", data.educations);
		},
	},
	getters: {
		projects(state: any): Array<Project> {
			return data.projects;
		}, 
		educations(state: any): Array<Education> {
			return data.educations;
		},
	},
	modules: {}
})

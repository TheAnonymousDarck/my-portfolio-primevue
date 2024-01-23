import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import AboutSection from '@/components/About/AboutSection.vue';
import SkillsSection from '@/components/Skill/SkillsSection.vue';
import ProjectsSection from '@/components/Projects/ProjectsSection.vue';
import ContactSection from '@/components/Contact/ContactSection.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about-section',
    name: 'about-section',
    component: () => AboutSection
  },
  {
    path: '/skills-section',
    name: 'skills-section',
    component: () => SkillsSection
  },
  {
    path: '/projects-section',
    name: 'projects-section',
    component: () => ProjectsSection
  },
  {
    path: '/contact-section',
    name: 'contact-section',
    component: () => ContactSection
  },
];

export default routes

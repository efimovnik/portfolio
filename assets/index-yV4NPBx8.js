(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("glow-effect"),o=document.querySelectorAll("section"),i=document.querySelectorAll(".nav a"),c={root:null,rootMargin:"0px",threshold:.6},t=new IntersectionObserver(e=>{e.forEach(r=>{if(r.isIntersecting){i.forEach(a=>a.querySelector(".nav-indicator").classList.remove("active"));const s=document.querySelector(`.nav a[href="#${r.target.id}"]`);s&&s.querySelector(".nav-indicator").classList.add("active")}})},c);if(!n){console.error("Glow effect element not found!");return}document.addEventListener("mousemove",e=>{const r=e.clientX+window.scrollX,s=e.clientY+window.scrollY;n.style.background=`radial-gradient(600px at ${r}px ${s}px, rgba(29, 78, 216, 0.15), transparent 80%)`}),document.addEventListener("mouseleave",()=>{n.style.background="radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)"}),o.forEach(e=>t.observe(e))});
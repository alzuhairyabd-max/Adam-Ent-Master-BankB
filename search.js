
// Step70 fallback
window.safeIncludes=(a,b)=>String(a||'').toLowerCase().includes(String(b||'').toLowerCase());
window.ENTApp=window.ENTApp||{};window.ENTApp.search={find(q){return []}};

// Step54 DB integration
window.ENTApp=window.ENTApp||{};
ENTApp.search=ENTApp.search||{};
ENTApp.search.getQuestions=function(){
 if(ENTApp.db&&ENTApp.db.getQuestions) return ENTApp.db.getQuestions();
 return window.questions||[];
};
ENTApp.search.search=function(term){
 term=(term||'').toLowerCase();
 return ENTApp.search.getQuestions().filter(q=>JSON.stringify(q).toLowerCase().includes(term));
};
window.addEventListener('questionsUpdated',()=>{document.dispatchEvent(new CustomEvent('searchIndexChanged'));});

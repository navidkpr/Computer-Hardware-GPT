"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/callbacks":
/*!**************************************!*\
  !*** external "langchain/callbacks" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("langchain/callbacks");;

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings":
/*!***************************************!*\
  !*** external "langchain/embeddings" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings");;

/***/ }),

/***/ "langchain/llms":
/*!*********************************!*\
  !*** external "langchain/llms" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("langchain/llms");;

/***/ }),

/***/ "langchain/prompts":
/*!************************************!*\
  !*** external "langchain/prompts" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("langchain/prompts");;

/***/ }),

/***/ "langchain/vectorstores":
/*!*****************************************!*\
  !*** external "langchain/vectorstores" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"pdf-test\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLFlBQVksd0NBQXdDO0FBRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9jb25maWcvcGluZWNvbmUudHM/NmYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYW5nZSB0aGUgbmFtZXNwYWNlIHRvIHRoZSBuYW1lc3BhY2Ugb24gUGluZWNvbmUgeW91J2QgbGlrZSB0byBzdG9yZSB5b3VyIGVtYmVkZGluZ3MuXG4gKi9cblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQaW5lY29uZSBpbmRleCBuYW1lIGluIC5lbnYgZmlsZScpO1xufVxuXG5jb25zdCBQSU5FQ09ORV9JTkRFWF9OQU1FID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSA/PyAnJztcblxuY29uc3QgUElORUNPTkVfTkFNRV9TUEFDRSA9ICdwZGYtdGVzdCc7IC8vbmFtZXNwYWNlIGlzIG9wdGlvbmFsIGZvciB5b3VyIHZlY3RvcnNcblxuZXhwb3J0IHsgUElORUNPTkVfSU5ERVhfTkFNRSwgUElORUNPTkVfTkFNRV9TUEFDRSB9O1xuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9JTkRFWF9OQU1FIiwiRXJyb3IiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n    /* create vectorstore*/ const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n        pineconeIndex: index,\n        textKey: \"text\",\n        namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n    });\n    res.writeHead(200, {\n        \"Content-Type\": \"text/event-stream\",\n        \"Cache-Control\": \"no-cache, no-transform\",\n        Connection: \"keep-alive\"\n    });\n    const sendData = (data)=>{\n        res.write(`data: ${data}\\n\\n`);\n    };\n    sendData(JSON.stringify({\n        data: \"\"\n    }));\n    //create chain\n    const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore, (token)=>{\n        sendData(JSON.stringify({\n            data: token\n        }));\n    });\n    try {\n        //Ask a question\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        sendData(JSON.stringify({\n            sourceDocs: response.sourceDocuments\n        }));\n    } catch (error) {\n        console.log(\"error\", error);\n    } finally{\n        sendData(\"[DONE]\");\n        res.end();\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDRDtBQUNUO0FBQ0s7QUFDMEI7QUFFOUQsZUFBZU0sUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUV0QyxJQUFJLENBQUNGLFVBQVU7UUFDYixPQUFPRCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JOLFNBQVNPLElBQUksR0FBR0MsVUFBVSxDQUFDLE1BQU07SUFFM0QsTUFBTUMsUUFBUWYsa0VBQWMsQ0FBQ0MsaUVBQW1CQTtJQUVoRCxxQkFBcUIsR0FDckIsTUFBTWdCLGNBQWMsTUFBTW5CLG1GQUErQixDQUN2RCxJQUFJRCxrRUFBZ0JBLENBQUMsQ0FBQyxJQUN0QjtRQUNFc0IsZUFBZUo7UUFDZkssU0FBUztRQUNUQyxXQUFXbkIsaUVBQW1CQTtJQUNoQztJQUdGRyxJQUFJaUIsU0FBUyxDQUFDLEtBQUs7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsV0FBVyxDQUFDQyxPQUFpQjtRQUNqQ3BCLElBQUlxQixLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUVELEtBQUssSUFBSSxDQUFDO0lBQy9CO0lBRUFELFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztRQUFFSCxNQUFNO0lBQUc7SUFFbkMsY0FBYztJQUNkLE1BQU1JLFFBQVE5QiwyREFBU0EsQ0FBQ2tCLGFBQWEsQ0FBQ2EsUUFBa0I7UUFDdEROLFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztZQUFFSCxNQUFNSztRQUFNO0lBQ3hDO0lBRUEsSUFBSTtRQUNGLGdCQUFnQjtRQUNoQixNQUFNQyxXQUFXLE1BQU1GLE1BQU1HLElBQUksQ0FBQztZQUNoQzFCLFVBQVVNO1lBQ1ZxQixjQUFjMUIsV0FBVyxFQUFFO1FBQzdCO1FBRUEyQixRQUFRQyxHQUFHLENBQUMsWUFBWUo7UUFDeEJQLFNBQVNHLEtBQUtDLFNBQVMsQ0FBQztZQUFFUSxZQUFZTCxTQUFTTSxlQUFlO1FBQUM7SUFDakUsRUFBRSxPQUFPQyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRztJQUN2QixTQUFVO1FBQ1JkLFNBQVM7UUFDVG5CLElBQUlrQyxHQUFHO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gJ2xhbmdjaGFpbi9lbWJlZGRpbmdzJztcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tICdsYW5nY2hhaW4vdmVjdG9yc3RvcmVzJztcbmltcG9ydCB7IG1ha2VDaGFpbiB9IGZyb20gJ0AvdXRpbHMvbWFrZWNoYWluJztcbmltcG9ydCB7IHBpbmVjb25lIH0gZnJvbSAnQC91dGlscy9waW5lY29uZS1jbGllbnQnO1xuaW1wb3J0IHsgUElORUNPTkVfSU5ERVhfTkFNRSwgUElORUNPTkVfTkFNRV9TUEFDRSB9IGZyb20gJ0AvY29uZmlnL3BpbmVjb25lJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgY29uc3QgeyBxdWVzdGlvbiwgaGlzdG9yeSB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFxdWVzdGlvbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdObyBxdWVzdGlvbiBpbiB0aGUgcmVxdWVzdCcgfSk7XG4gIH1cbiAgLy8gT3BlbkFJIHJlY29tbWVuZHMgcmVwbGFjaW5nIG5ld2xpbmVzIHdpdGggc3BhY2VzIGZvciBiZXN0IHJlc3VsdHNcbiAgY29uc3Qgc2FuaXRpemVkUXVlc3Rpb24gPSBxdWVzdGlvbi50cmltKCkucmVwbGFjZUFsbCgnXFxuJywgJyAnKTtcblxuICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFBJTkVDT05FX0lOREVYX05BTUUpO1xuXG4gIC8qIGNyZWF0ZSB2ZWN0b3JzdG9yZSovXG4gIGNvbnN0IHZlY3RvclN0b3JlID0gYXdhaXQgUGluZWNvbmVTdG9yZS5mcm9tRXhpc3RpbmdJbmRleChcbiAgICBuZXcgT3BlbkFJRW1iZWRkaW5ncyh7fSksXG4gICAge1xuICAgICAgcGluZWNvbmVJbmRleDogaW5kZXgsXG4gICAgICB0ZXh0S2V5OiAndGV4dCcsXG4gICAgICBuYW1lc3BhY2U6IFBJTkVDT05FX05BTUVfU1BBQ0UsXG4gICAgfSxcbiAgKTtcblxuICByZXMud3JpdGVIZWFkKDIwMCwge1xuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9ldmVudC1zdHJlYW0nLFxuICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlLCBuby10cmFuc2Zvcm0nLFxuICAgIENvbm5lY3Rpb246ICdrZWVwLWFsaXZlJyxcbiAgfSk7XG5cbiAgY29uc3Qgc2VuZERhdGEgPSAoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgcmVzLndyaXRlKGBkYXRhOiAke2RhdGF9XFxuXFxuYCk7XG4gIH07XG5cbiAgc2VuZERhdGEoSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiAnJyB9KSk7XG5cbiAgLy9jcmVhdGUgY2hhaW5cbiAgY29uc3QgY2hhaW4gPSBtYWtlQ2hhaW4odmVjdG9yU3RvcmUsICh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgc2VuZERhdGEoSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB0b2tlbiB9KSk7XG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgLy9Bc2sgYSBxdWVzdGlvblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hhaW4uY2FsbCh7XG4gICAgICBxdWVzdGlvbjogc2FuaXRpemVkUXVlc3Rpb24sXG4gICAgICBjaGF0X2hpc3Rvcnk6IGhpc3RvcnkgfHwgW10sXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgc2VuZERhdGEoSlNPTi5zdHJpbmdpZnkoeyBzb3VyY2VEb2NzOiByZXNwb25zZS5zb3VyY2VEb2N1bWVudHMgfSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzZW5kRGF0YSgnW0RPTkVdJyk7XG4gICAgcmVzLmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BlbkFJRW1iZWRkaW5ncyIsIlBpbmVjb25lU3RvcmUiLCJtYWtlQ2hhaW4iLCJwaW5lY29uZSIsIlBJTkVDT05FX0lOREVYX05BTUUiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXN0aW9uIiwiaGlzdG9yeSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNhbml0aXplZFF1ZXN0aW9uIiwidHJpbSIsInJlcGxhY2VBbGwiLCJpbmRleCIsIkluZGV4IiwidmVjdG9yU3RvcmUiLCJmcm9tRXhpc3RpbmdJbmRleCIsInBpbmVjb25lSW5kZXgiLCJ0ZXh0S2V5IiwibmFtZXNwYWNlIiwid3JpdGVIZWFkIiwiQ29ubmVjdGlvbiIsInNlbmREYXRhIiwiZGF0YSIsIndyaXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYWluIiwidG9rZW4iLCJyZXNwb25zZSIsImNhbGwiLCJjaGF0X2hpc3RvcnkiLCJjb25zb2xlIiwibG9nIiwic291cmNlRG9jcyIsInNvdXJjZURvY3VtZW50cyIsImVycm9yIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms */ \"langchain/llms\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\n/* harmony import */ var langchain_prompts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/prompts */ \"langchain/prompts\");\n/* harmony import */ var langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! langchain/callbacks */ \"langchain/callbacks\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__, langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_llms__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_prompts__WEBPACK_IMPORTED_MODULE_2__, langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst CONDENSE_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.\n\nChat History:\n{chat_history}\nFollow Up Input: {question}\nStandalone question:`);\nconst QA_PROMPT = langchain_prompts__WEBPACK_IMPORTED_MODULE_2__.PromptTemplate.fromTemplate(`You are an AI assistant providing helpful advice. You are given the following extracted parts of a long document and a question. Provide a conversational answer based on the context provided.\nYou should only provide hyperlinks that reference the context below. Do NOT make up hyperlinks.\nIf you can't find the answer in the context below, just say \"Hmm, I'm not sure.\" Don't try to make up an answer.\nIf the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.\n\nQuestion: {question}\n=========\n{context}\n=========\nAnswer in Markdown:`);\nconst makeChain = (vectorstore, onTokenStream)=>{\n    const questionGenerator = new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.LLMChain({\n        llm: new langchain_llms__WEBPACK_IMPORTED_MODULE_0__.OpenAIChat({\n            temperature: 0\n        }),\n        prompt: CONDENSE_PROMPT\n    });\n    const docChain = (0,langchain_chains__WEBPACK_IMPORTED_MODULE_1__.loadQAChain)(new langchain_llms__WEBPACK_IMPORTED_MODULE_0__.OpenAIChat({\n        temperature: 0,\n        modelName: \"gpt-4\",\n        streaming: Boolean(onTokenStream),\n        callbackManager: onTokenStream ? langchain_callbacks__WEBPACK_IMPORTED_MODULE_3__.CallbackManager.fromHandlers({\n            async handleLLMNewToken (token) {\n                onTokenStream(token);\n                console.log(token);\n            }\n        }) : undefined\n    }), {\n        prompt: QA_PROMPT\n    });\n    return new langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ChatVectorDBQAChain({\n        vectorstore,\n        combineDocumentsChain: docChain,\n        questionGeneratorChain: questionGenerator,\n        returnSourceDocuments: true,\n        k: 2\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDa0M7QUFFM0I7QUFDRztBQUV0RCxNQUFNTSxrQkFDSkYsMEVBQTJCLENBQUMsQ0FBQzs7Ozs7b0JBS1gsQ0FBQztBQUVyQixNQUFNSSxZQUFZSiwwRUFBMkIsQ0FDM0MsQ0FBQzs7Ozs7Ozs7O21CQVNnQixDQUFDO0FBR2IsTUFBTUssWUFBWSxDQUN2QkMsYUFDQUMsZ0JBQ0c7SUFDSCxNQUFNQyxvQkFBb0IsSUFBSVgsc0RBQVFBLENBQUM7UUFDckNZLEtBQUssSUFBSWIsc0RBQVVBLENBQUM7WUFBRWMsYUFBYTtRQUFFO1FBQ3JDQyxRQUFRVDtJQUNWO0lBQ0EsTUFBTVUsV0FBV2IsNkRBQVdBLENBQzFCLElBQUlILHNEQUFVQSxDQUFDO1FBQ2JjLGFBQWE7UUFDYkcsV0FBVztRQUNYQyxXQUFXQyxRQUFRUjtRQUNuQlMsaUJBQWlCVCxnQkFDYk4sNkVBQTRCLENBQUM7WUFDM0IsTUFBTWlCLG1CQUFrQkMsS0FBSyxFQUFFO2dCQUM3QlosY0FBY1k7Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGLEtBQ0FHLFNBQVM7SUFDZixJQUNBO1FBQUVYLFFBQVFQO0lBQVU7SUFHdEIsT0FBTyxJQUFJTixpRUFBbUJBLENBQUM7UUFDN0JRO1FBQ0FpQix1QkFBdUJYO1FBQ3ZCWSx3QkFBd0JoQjtRQUN4QmlCLHVCQUF1QixJQUFJO1FBQzNCQyxHQUFHO0lBQ0w7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi91dGlscy9tYWtlY2hhaW4udHM/Y2ZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcGVuQUlDaGF0IH0gZnJvbSAnbGFuZ2NoYWluL2xsbXMnO1xuaW1wb3J0IHsgTExNQ2hhaW4sIENoYXRWZWN0b3JEQlFBQ2hhaW4sIGxvYWRRQUNoYWluIH0gZnJvbSAnbGFuZ2NoYWluL2NoYWlucyc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnbGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcyc7XG5pbXBvcnQgeyBQcm9tcHRUZW1wbGF0ZSB9IGZyb20gJ2xhbmdjaGFpbi9wcm9tcHRzJztcbmltcG9ydCB7IENhbGxiYWNrTWFuYWdlciB9IGZyb20gJ2xhbmdjaGFpbi9jYWxsYmFja3MnO1xuXG5jb25zdCBDT05ERU5TRV9QUk9NUFQgPVxuICBQcm9tcHRUZW1wbGF0ZS5mcm9tVGVtcGxhdGUoYEdpdmVuIHRoZSBmb2xsb3dpbmcgY29udmVyc2F0aW9uIGFuZCBhIGZvbGxvdyB1cCBxdWVzdGlvbiwgcmVwaHJhc2UgdGhlIGZvbGxvdyB1cCBxdWVzdGlvbiB0byBiZSBhIHN0YW5kYWxvbmUgcXVlc3Rpb24uXG5cbkNoYXQgSGlzdG9yeTpcbntjaGF0X2hpc3Rvcnl9XG5Gb2xsb3cgVXAgSW5wdXQ6IHtxdWVzdGlvbn1cblN0YW5kYWxvbmUgcXVlc3Rpb246YCk7XG5cbmNvbnN0IFFBX1BST01QVCA9IFByb21wdFRlbXBsYXRlLmZyb21UZW1wbGF0ZShcbiAgYFlvdSBhcmUgYW4gQUkgYXNzaXN0YW50IHByb3ZpZGluZyBoZWxwZnVsIGFkdmljZS4gWW91IGFyZSBnaXZlbiB0aGUgZm9sbG93aW5nIGV4dHJhY3RlZCBwYXJ0cyBvZiBhIGxvbmcgZG9jdW1lbnQgYW5kIGEgcXVlc3Rpb24uIFByb3ZpZGUgYSBjb252ZXJzYXRpb25hbCBhbnN3ZXIgYmFzZWQgb24gdGhlIGNvbnRleHQgcHJvdmlkZWQuXG5Zb3Ugc2hvdWxkIG9ubHkgcHJvdmlkZSBoeXBlcmxpbmtzIHRoYXQgcmVmZXJlbmNlIHRoZSBjb250ZXh0IGJlbG93LiBEbyBOT1QgbWFrZSB1cCBoeXBlcmxpbmtzLlxuSWYgeW91IGNhbid0IGZpbmQgdGhlIGFuc3dlciBpbiB0aGUgY29udGV4dCBiZWxvdywganVzdCBzYXkgXCJIbW0sIEknbSBub3Qgc3VyZS5cIiBEb24ndCB0cnkgdG8gbWFrZSB1cCBhbiBhbnN3ZXIuXG5JZiB0aGUgcXVlc3Rpb24gaXMgbm90IHJlbGF0ZWQgdG8gdGhlIGNvbnRleHQsIHBvbGl0ZWx5IHJlc3BvbmQgdGhhdCB5b3UgYXJlIHR1bmVkIHRvIG9ubHkgYW5zd2VyIHF1ZXN0aW9ucyB0aGF0IGFyZSByZWxhdGVkIHRvIHRoZSBjb250ZXh0LlxuXG5RdWVzdGlvbjoge3F1ZXN0aW9ufVxuPT09PT09PT09XG57Y29udGV4dH1cbj09PT09PT09PVxuQW5zd2VyIGluIE1hcmtkb3duOmAsXG4pO1xuXG5leHBvcnQgY29uc3QgbWFrZUNoYWluID0gKFxuICB2ZWN0b3JzdG9yZTogUGluZWNvbmVTdG9yZSxcbiAgb25Ub2tlblN0cmVhbT86ICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkLFxuKSA9PiB7XG4gIGNvbnN0IHF1ZXN0aW9uR2VuZXJhdG9yID0gbmV3IExMTUNoYWluKHtcbiAgICBsbG06IG5ldyBPcGVuQUlDaGF0KHsgdGVtcGVyYXR1cmU6IDAgfSksXG4gICAgcHJvbXB0OiBDT05ERU5TRV9QUk9NUFQsXG4gIH0pO1xuICBjb25zdCBkb2NDaGFpbiA9IGxvYWRRQUNoYWluKFxuICAgIG5ldyBPcGVuQUlDaGF0KHtcbiAgICAgIHRlbXBlcmF0dXJlOiAwLFxuICAgICAgbW9kZWxOYW1lOiAnZ3B0LTQnLCAvL2NoYW5nZSB0aGlzIHRvIG9sZGVyIHZlcnNpb25zIChlLmcuIGdwdC0zLjUtdHVyYm8pIGlmIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byBncHQtNFxuICAgICAgc3RyZWFtaW5nOiBCb29sZWFuKG9uVG9rZW5TdHJlYW0pLFxuICAgICAgY2FsbGJhY2tNYW5hZ2VyOiBvblRva2VuU3RyZWFtXG4gICAgICAgID8gQ2FsbGJhY2tNYW5hZ2VyLmZyb21IYW5kbGVycyh7XG4gICAgICAgICAgICBhc3luYyBoYW5kbGVMTE1OZXdUb2tlbih0b2tlbikge1xuICAgICAgICAgICAgICBvblRva2VuU3RyZWFtKHRva2VuKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9KSxcbiAgICB7IHByb21wdDogUUFfUFJPTVBUIH0sXG4gICk7XG5cbiAgcmV0dXJuIG5ldyBDaGF0VmVjdG9yREJRQUNoYWluKHtcbiAgICB2ZWN0b3JzdG9yZSxcbiAgICBjb21iaW5lRG9jdW1lbnRzQ2hhaW46IGRvY0NoYWluLFxuICAgIHF1ZXN0aW9uR2VuZXJhdG9yQ2hhaW46IHF1ZXN0aW9uR2VuZXJhdG9yLFxuICAgIHJldHVyblNvdXJjZURvY3VtZW50czogdHJ1ZSxcbiAgICBrOiAyLCAvL251bWJlciBvZiBzb3VyY2UgZG9jdW1lbnRzIHRvIHJldHVyblxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiT3BlbkFJQ2hhdCIsIkxMTUNoYWluIiwiQ2hhdFZlY3RvckRCUUFDaGFpbiIsImxvYWRRQUNoYWluIiwiUHJvbXB0VGVtcGxhdGUiLCJDYWxsYmFja01hbmFnZXIiLCJDT05ERU5TRV9QUk9NUFQiLCJmcm9tVGVtcGxhdGUiLCJRQV9QUk9NUFQiLCJtYWtlQ2hhaW4iLCJ2ZWN0b3JzdG9yZSIsIm9uVG9rZW5TdHJlYW0iLCJxdWVzdGlvbkdlbmVyYXRvciIsImxsbSIsInRlbXBlcmF0dXJlIiwicHJvbXB0IiwiZG9jQ2hhaW4iLCJtb2RlbE5hbWUiLCJzdHJlYW1pbmciLCJCb29sZWFuIiwiY2FsbGJhY2tNYW5hZ2VyIiwiZnJvbUhhbmRsZXJzIiwiaGFuZGxlTExNTmV3VG9rZW4iLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJjb21iaW5lRG9jdW1lbnRzQ2hhaW4iLCJxdWVzdGlvbkdlbmVyYXRvckNoYWluIiwicmV0dXJuU291cmNlRG9jdW1lbnRzIiwiayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi91dGlscy9waW5lY29uZS1jbGllbnQudHM/ZGYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZUNsaWVudCB9IGZyb20gJ0BwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZSc7XG5cbmlmICghcHJvY2Vzcy5lbnYuUElORUNPTkVfRU5WSVJPTk1FTlQgfHwgIXByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQaW5lY29uZSBlbnZpcm9ubWVudCBvciBhcGkga2V5IHZhcnMgbWlzc2luZycpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0UGluZWNvbmUoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGluZWNvbmUgPSBuZXcgUGluZWNvbmVDbGllbnQoKTtcblxuICAgIGF3YWl0IHBpbmVjb25lLmluaXQoe1xuICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LlBJTkVDT05FX0VOVklST05NRU5UID8/ICcnLCAvL3RoaXMgaXMgaW4gdGhlIGRhc2hib2FyZFxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/ICcnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpbmVjb25lO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFBpbmVjb25lIENsaWVudCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaW5lY29uZSA9IGF3YWl0IGluaXRQaW5lY29uZSgpO1xuIl0sIm5hbWVzIjpbIlBpbmVjb25lQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0VOVklST05NRU5UIiwiUElORUNPTkVfQVBJX0tFWSIsIkVycm9yIiwiaW5pdFBpbmVjb25lIiwicGluZWNvbmUiLCJpbml0IiwiZW52aXJvbm1lbnQiLCJhcGlLZXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();
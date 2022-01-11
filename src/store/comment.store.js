import { commentService } from '@/services/comment.service';

export default {
  strict: true,
  state: {
    isLoading: false,
    comments: [],
    filterBy: {
      term: null,
      inStock: 'all',
      commentType: null,
      sortBy: null
    },
  },
  getters: {
    commentsForDisplay(state) {
      return state.comments
    },
    isLoading(state) {
      return state.isLoading
    },
    filterBy(state) {
      return state.filterBy
    },
  },
  mutations: {
    setComments(state, { comments }) {
      state.comments = comments
    },
    setLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
    addComment(state, { savedComment }) {
      state.comments.push(savedComment)
    },
    changeView(state, { view }) {
      if (view === 'grid') {
        state.showTable = false;
        state.showCards = true;
      } else {
        state.showCards = false;
        state.showTable = true;
        console.log(state.showTable);
      }
    },
    updateComment(state, { savedComment }) {
      const idx = state.comments.findIndex(currComment => currComment._id === savedComment._id)
      state.comments.splice(idx, 1, savedComment)
    },
    removeComment(state, { id }) {
      const idx = state.comments.findIndex(comment => comment._id === id)
      state.comments.splice(idx, 1)
    },
    setFilter(state, { filter }) {
      state.filterBy = filter
    },
    setSort(state, { sort }) {
      state.filterBy = sort
    }
  },
  actions: {
    async loadComments(context) {
      try {
        context.commit({ type: 'setLoading', isLoading: true })
        const filterBy = context.getters.filterBy
        var comments = await commentService.query(filterBy)
        context.commit({ type: 'setComments', comments })
      } catch (err) {
        console.log(`Had issues getting from server`, err)
      } finally{
        context.commit({ type: 'setLoading', isLoading: false })
      }
    },
    changeView({ commit }, { view }) {
      commit({ type: 'changeView', view })
    },
    async addComment(context, { comment }) {
        
      const savedComment = await commentService.save(comment)
      try {
        context.commit({ type: 'addComment', savedComment })
        return savedComment
      } catch {
        console.log('error while trying to add comment, in store.');
      }
        
    },
    async removeComment(context, { id }) {
      await commentService.remove(id)
      context.commit({ type: 'removeComment', id })
    },
    setFilter({ commit, state }, { filter }) {
      commit({ type: 'setFilter', filter })
      commentService.query(state.filterBy)
        .then(comments => {
          commit({ type: 'setComments', comments })
        })
    },
    setSort({ commit, state }, { sort }) {
      commit({ type: 'setSort', sort })
      commentService.query(state.filterBy)
        .then(comments => {
          commit({ type: 'setComments', comments })
        })
    }
  }
}

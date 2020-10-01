import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
    //where all our data will go
    userDetails: {}
}

const mutations = {
    //sync methods to transform our data
    setUserDetails(state, payload) {
        state.userDetails = payload;
    }
}

const actions = {
    //async methods to transform our data
    registerUser({}, payload) {
        console.log('payload', payload, 'registerUser')
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('registering')
            let userId = firebaseAuth.currentUser.uid
            firebaseDb.ref('users/' + userId).set({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email
            })
            //go back to home page on success
            this.$router.push('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    },
    loginUser({}, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log('logged in')
            //go back to home page on success
            this.$router.push('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    },
    handleAuthStateChanged({ commit }) {
        firebaseAuth.onIdTokenChanged(user => {
            if (user) {
              // User is signed in or token was refreshed.
              //get their data and store it
              let userId = firebaseAuth.currentUser.uid
              firebaseDb.ref('users/' + userId).once('value', snapshot => {
                
                let userDetails = snapshot.val()
                commit('setUserDetails', {
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    email: userDetails.email,
                    userId: userId
                })
              })
            }
            else {
                //user logs out
                commit('setUserDetails', {})
            }
          });
    }
}

const getters = {
    //methods to pull data from our vue components
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
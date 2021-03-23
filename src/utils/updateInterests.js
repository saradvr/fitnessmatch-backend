/*
 * @param model Object - a model to be updated
 * @param interests Array - interests is an array of specializations or disciplines
 * @param modelKey String - the key to be updated inside the model
 * @param userTypeId String - a coach id or client id
 *
 * this function adds a coach or client reference to every specialization or disciplines.
 */
async function updateInterests(model, interests, modelKey, userTypeId) {
  if(interests) {
    await Promise.all(interests.map(async (interestId) => {
      return await model.findByIdAndUpdate(
        interestId,
        {$push: { [modelKey]: userTypeId }},
        {new: true}
      )
    }))
  }
}

module.exports = updateInterests
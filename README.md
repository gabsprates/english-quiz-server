# English Quiz server :us: :game_die:

Hello everyone!

This is the server to provide questions for my own React project, the [English Quiz](https://github.com/gabsprates/english-quiz)!

I built it with NodeJS, ExpressJS and MongoDB.

## How to use

With the command `npm run export_and_run`, it will run on port 3000 and will accept 4 HTTP verbs for the route `questions/`:

* `GET`
  * `questions/`: return all questions
  * `questions/:_id`: return a especific question

* `POST`
  * `questions/`: to create a new question

* `PUT`
  * `questions/:_id`: to update a question

* `DELETE`
  * `questions/:_id`: to delete a question

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © [Gabriel Prates](http://gabsprates.com)

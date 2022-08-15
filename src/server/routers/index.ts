import { createProtectedRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { assetsRouter } from "./Asset.router";
import { assetupdatesRouter } from "./AssetUpdate.router";
import { optionsRouter } from "./Option.router";
import { extensionsRouter } from "./Extensions.router";
import { questionsRouter } from "./Question.router";
import { sectionsRouter } from "./Section.router";
import { manifestsRouter } from "./Manifest.router";
import { manifestupdatesRouter } from "./ManifestUpdate.router";
import { attachmentsRouter } from "./Attachment.router";
import { answersRouter } from "./Answer.router";
import { commentsRouter } from "./Comment.router";

export const appRouter = createProtectedRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('asset.', assetsRouter)

  .merge('assetupdate.', assetupdatesRouter)

  .merge('option.', optionsRouter)

  .merge('extensions.', extensionsRouter)

  .merge('question.', questionsRouter)

  .merge('section.', sectionsRouter)

  .merge('manifest.', manifestsRouter)

  .merge('manifestupdate.', manifestupdatesRouter)

  .merge('attachment.', attachmentsRouter)

  .merge('answer.', answersRouter)

  .merge('comment.', commentsRouter)

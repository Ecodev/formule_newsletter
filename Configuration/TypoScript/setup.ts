plugin.tx_formule {


    settings {

        templates {

            # Reset default template.
            2 >
            2 {
                title = LLL:EXT:formule/Resources/Private/Language/locallang.xlf:newsletter.new
                #path = EXT:formule_newsletter/Resources/Private/Templates/SubscriptionNew.html
                path = EXT:formule/Resources/Private/Standalone/Newsletter/SubscriptionNew.html

                validators {
                    0 = Fab\Formule\Validator\EmailUniqueValidator
                    1 = Fab\Formule\Validator\EmailFormatValidator
                }

                # Persist configuration
                persist {
                    tableName = tt_address

                    defaultValues {
                        pid = 1
                        hidden = 1
                    }

                    processors {
                        0 = Fab\FormuleNewsletter\Processor\NewsletterNewProcessor
                    }

                }
            }

            # Reset default default.
            3 >
            3 {
                title = LLL:EXT:formule/Resources/Private/Language/locallang.xlf:newsletter.edit
                #path = EXT:formule/Resources/Private/Templates/SubscriptionEdit.html
                path = EXT:formule/Resources/Private/Standalone/Newsletter/SubscriptionEdit.html

                loaders {
                    0 = Fab\Formule\Loader\UserDataLoader
                }

                validators {
                    0 = Fab\Formule\Validator\EmailUniqueValidator
                    1 = Fab\Formule\Validator\EmailFormatValidator
                }

                # Persist configuration
                persist {
                    tableName = tt_address

                    processors {
                        0 = Fab\FormuleNewsletter\Processor\NewsletterEditProcessor
                    }
                }
            }
        }
    }
}

using System;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditProfileValidator : AbstractValidator<EditProfile.Command>
{
    public EditProfileValidator()
    {
        RuleFor(x => x.DisplayName).NotEmpty();
    }
}

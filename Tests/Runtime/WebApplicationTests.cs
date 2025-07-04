using NUnit.Framework;

namespace BananaParty.WebUtility.Tests
{
    public class WebApplicationTests
    {
        [Test]
        public void InBackgroundShouldReturnFalse()
        {
            Assert.IsFalse(WebApplication.InBackground);
        }
    }
}
